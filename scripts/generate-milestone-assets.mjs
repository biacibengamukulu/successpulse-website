import { execFile } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import puppeteer from 'puppeteer';

const execFileAsync = promisify(execFile);

const baseUrl = process.env.AUDIT_BASE_URL ?? process.argv[2] ?? 'http://127.0.0.1:4173';
const screenshotsDir = 'screenshots';
const lighthouseDir = path.join('reports', 'lighthouse');
const knownPaths = ['/', '/platform', '/campaigns', '/collections', '/branch-ops', '/pricing', '/roadmap', '/about', '/contact'];
const chromeFlags = '--headless=new --no-sandbox --disable-setuid-sandbox';

function routeSlug(url) {
  const parsed = new URL(url);
  return parsed.pathname === '/'
    ? 'home'
    : parsed.pathname.slice(1).replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
}

async function discoverInternalRoutes(page) {
  await page.goto(new URL('/', baseUrl).href, { waitUntil: 'networkidle0', timeout: 60000 });

  const baseOrigin = new URL(baseUrl).origin;
  const discovered = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]')).map((anchor) => anchor.href));
  const internal = new Set(knownPaths.map((routePath) => new URL(routePath, baseOrigin).href));

  for (const href of discovered) {
    try {
      const url = new URL(href);
      if (url.origin === baseOrigin) {
        internal.add(url.origin + url.pathname);
      }
    } catch {
      // Ignore malformed hrefs.
    }
  }

  const preferredOrder = knownPaths.map((routePath) => new URL(routePath, baseUrl).href);
  return Array.from(internal).sort((a, b) => {
    const ai = preferredOrder.indexOf(a);
    const bi = preferredOrder.indexOf(b);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi) || a.localeCompare(b);
  });
}

async function captureScreenshots(page, urls) {
  const manifest = [];

  for (let index = 0; index < urls.length; index += 1) {
    const url = urls[index];
    const slug = routeSlug(url);
    const file = path.join(screenshotsDir, `${String(index + 1).padStart(2, '0')}-${slug}.png`);

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.screenshot({ path: file, fullPage: true });
    manifest.push({ url, file });
    console.log(`screenshot ${url} -> ${file}`);
  }

  await fs.writeFile(path.join(screenshotsDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
}

async function runLighthouse(urls) {
  const summary = [];
  const chromePath = puppeteer.executablePath();

  for (const url of urls) {
    const slug = routeSlug(url);
    const outputBase = path.join(lighthouseDir, slug);
    const htmlFile = `${outputBase}.report.html`;
    const jsonFile = `${outputBase}.report.json`;

    await execFileAsync(
      path.join('node_modules', '.bin', 'lighthouse'),
      [
        url,
        '--quiet',
        '--preset=desktop',
        '--only-categories=performance,accessibility,best-practices,seo',
        '--output=html',
        '--output=json',
        `--output-path=${outputBase}`,
        `--chrome-flags=${chromeFlags}`,
      ],
      {
        env: {
          ...process.env,
          CHROME_PATH: chromePath,
        },
        maxBuffer: 1024 * 1024 * 20,
      },
    );

    const report = JSON.parse(await fs.readFile(jsonFile, 'utf8'));
    const scores = Object.fromEntries(
      Object.entries(report.categories).map(([key, category]) => [key, Math.round((category.score ?? 0) * 100)]),
    );

    summary.push({ url, html: htmlFile, json: jsonFile, scores });
    console.log(`lighthouse ${url} -> ${htmlFile}`);
  }

  await fs.writeFile(path.join(lighthouseDir, 'summary.json'), `${JSON.stringify(summary, null, 2)}\n`);
  await fs.writeFile(path.join(lighthouseDir, 'summary.md'), buildSummaryMarkdown(summary));
}

function buildSummaryMarkdown(summary) {
  const lines = [
    '# Lighthouse Milestone Report',
    '',
    `Base URL: ${baseUrl}`,
    '',
    '| Page | Performance | Accessibility | Best Practices | SEO | HTML Report |',
    '| --- | ---: | ---: | ---: | ---: | --- |',
  ];

  for (const item of summary) {
    const name = routeSlug(item.url);
    const scores = item.scores;
    lines.push(`| ${name} | ${scores.performance} | ${scores.accessibility} | ${scores['best-practices']} | ${scores.seo} | ${item.html} |`);
  }

  lines.push('', 'Targets: Performance 95+, Accessibility 100, Best Practices 100, SEO 100.', '');
  return lines.join('\n');
}

async function assertReachable() {
  await execFileAsync('node', [
    '--input-type=module',
    '-e',
    `const response = await fetch(${JSON.stringify(baseUrl)}); if (!response.ok) process.exit(1);`,
  ]);
}

await fs.mkdir(screenshotsDir, { recursive: true });
await fs.mkdir(lighthouseDir, { recursive: true });
await assertReachable();

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
});

try {
  const page = await browser.newPage();
  const urls = await discoverInternalRoutes(page);
  await captureScreenshots(page, urls);
  await runLighthouse(urls);
} finally {
  await browser.close();
}
