# Tanya Semenova · CV website

Hi! This is my personal CV as a little website: who I am, what I've built, and where I come from, with a bit of glitter on top.

**Live site:** https://tjllis.github.io/cv/

![Hero of the CV site: name, short intro and contact buttons](docs/hero.png)

## What's on the page

- **Hero** with a short intro and buttons to email me, visit my GitHub, or download the PDF version of the CV.
- **Things I've built**, a set of project cards with the stack, a few highlights, and links to code and live demos.
- **My toolkit**, grouped by Web & UI, QA and Languages. On desktop it stays in view while you scroll the projects.
- **Education, Experience and Volunteering** as tabs on desktop and stacked sections on phones.
- A sparkle trail that follows your cursor, stars that run along the buttons on hover, and a twinkling star by my name. All of it steps aside if you prefer reduced motion.

## How it's built

- [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org), bundled with [Vite](https://vite.dev).
- [Base UI](https://base-ui.com) for the accessible building blocks: Tabs, Toolbar and Separator, plus its media query hook for the mobile layout.
- Plain CSS with a small set of colour tokens, no CSS framework. Fonts are Fredoka for headings, Nunito for text and JetBrains Mono for the small labels.
- All content lives in `src/data.ts`.
- Deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`.

## Running it locally
I don't know why you would ever need that, but you do you

```sh
npm install
npm run dev
```
