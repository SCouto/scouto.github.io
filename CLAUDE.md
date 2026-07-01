# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website (GitHub Pages) for Sergio Couto, featuring bilingual support (English and Galician). The site is built with vanilla HTML, CSS, and JavaScript without any build tools or frameworks.

## Architecture

**Multi-language System**: All pages share a single `js/common.js` holding one `translations` object (`en`/`gl`) and a data-attribute-driven `changeLanguage(lang)`. Any element with a `data-i18n="<key>"` attribute gets its `textContent` set from the translations dict; language state persists in `localStorage` as `preferredLanguage`. The language switcher uses flag `<button>`s (`data-lang`), and the active language is marked with `aria-pressed`.

**Page Structure**: The site follows a consistent pattern where:
- `index.html` serves as the homepage
- Section pages live in `pages/` directory (articles.html, conferences.html, teaching.html, contact.html)
- Shared styles live in `css/common.css` (design tokens + nav + language switcher + responsive base); each page adds a small section-only stylesheet (`css/styles.css`, `articles.css`, etc.)
- All pages load `css/common.css` + their page CSS, and the single `js/common.js`
- All pages share the same navigation structure and language switcher

**Navigation**: A sticky top menu (`<nav class="top-menu">`) appears on all pages with a mobile-responsive hamburger menu (`.menu-toggle`). The menu collapses on mobile devices using the `.show` class toggle.

**Path References**: Pages in the `pages/` directory use relative paths with `../` to reference assets (CSS, JS, images) in the root directory structure.

## Key Implementation Patterns

**Translation System** (`js/common.js`):
1. One `translations` object with `en` and `gl` keys
2. `changeLanguage(lang)` loops over `[data-i18n]` elements and sets each `textContent` from `translations[lang][key]`
3. Persists language preference in `localStorage` as `preferredLanguage`
4. Loads saved language on `DOMContentLoaded`; also marks the active nav link (`aria-current="page"`) and wires the hamburger (auto-closes after a link tap)

To translate new content: add `data-i18n="myKey"` to the element and add `myKey` to both `en` and `gl` in `js/common.js`.

**Design Tokens**: `css/common.css` defines CSS custom properties in `:root` (colors, shadows, radius, font). Dark mode is handled entirely by overriding those tokens inside `@media (prefers-color-scheme: dark)` — use the variables, never hardcode colors.

**Responsive Design**: Mobile breakpoint at 768px transforms the navigation from horizontal to vertical dropdown menu, controlled by the hamburger icon.

**SEO**: Each page has a unique `<title>`, `<meta name="description">`, canonical link, and Open Graph/Twitter tags; `index.html` carries JSON-LD `Person`. `robots.txt` and `sitemap.xml` live at the repo root — add new pages to the sitemap. `404.html` (root, absolute asset paths) is served by GitHub Pages for unknown routes.

## Development Notes

This is a static site hosted on GitHub Pages. There are no build steps, dependency installations, or testing frameworks. Changes are made directly to HTML, CSS, and JavaScript files and deployed via git push to the main branch.
