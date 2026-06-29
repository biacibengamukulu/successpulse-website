import puppeteer, { Browser, Page } from 'puppeteer';
import * as path from 'path';

// Constants for configuration
const TARGET_URL: string = 'http://localhost:5173'; // Make sure your Vite server is running!
const OUTPUT_FILENAME: string = 'website-screenshot.png';
const OUTPUT_PATH: string = path.join(process.cwd(), OUTPUT_FILENAME);

/**
 * Launches a headless browser, navigates to the specified URL, and takes a full-page screenshot.
 *
 * @param {string} url - The URL of the website to capture.
 * @param {string} outputPath - The file path where the screenshot will be saved.
 * @returns {Promise<void>}
 */
async function captureScreenshot(url: string, outputPath: string): Promise<void> {
  let browser: Browser | null = null;

  try {
    console.log('Launching headless browser...');
    browser = await puppeteer.launch({
      headless: true, // Runs in the background without a visible UI
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
    });

    const page: Page = await browser.newPage();

    console.log(`Navigating to ${url} ...`);
    // waitUntil: 'networkidle0' ensures the page has fully loaded all assets
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

    console.log('Taking screenshot...');
    await page.screenshot({
      path: outputPath,
      fullPage: true // Set to false if you only want the visible viewport
    });

    console.log(`✅ Screenshot successfully saved to: ${outputPath}`);
  } catch (error) {
    console.error('❌ Failed to capture screenshot:', error instanceof Error ? error.message : error);
    process.exit(1);
  } finally {
    if (browser !== null) {
      console.log('Closing browser...');
      await browser.close();
    }
  }
}

// Execute the automation
captureScreenshot(TARGET_URL, OUTPUT_PATH);