# Website Board Workflow

SuccessPulse website pages are reviewed as product milestones.

## Milestone Process

1. The Website Board defines the page and review goal.
2. Codex implements the page.
3. Codex generates screenshots and Lighthouse reports.
4. The Website Board reviews screenshots and Lighthouse scores.
5. Codex applies revisions.
6. Repeat until the page meets the quality target, then move to the next page.

## Required Milestone Outputs

Every milestone must include:

- Full-page screenshots for each reviewed internal route in `screenshots/`
- Lighthouse HTML reports in `reports/lighthouse/`
- Lighthouse JSON reports in `reports/lighthouse/`
- Lighthouse score summary in `reports/lighthouse/summary.md`

## Lighthouse Targets

| Category | Target |
| --- | ---: |
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## Commands

Build production assets:

```sh
npm run build
```

Start a local production preview:

```sh
npm run preview -- --host 127.0.0.1 --port 4173
```

Generate screenshots and Lighthouse reports:

```sh
npm run milestone:assets -- http://127.0.0.1:4173
```
