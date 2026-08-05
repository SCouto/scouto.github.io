# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website (GitHub Pages) for Sergio Couto, featuring bilingual support (English and Galician). The site is built with vanilla HTML, CSS, and JavaScript without any build tools or frameworks.

## Architecture

**Multi-language System**: All pages share a single `js/common.js` holding one `translations` object (`en`/`gl`) and a data-attribute-driven `changeLanguage(lang)`. Any element with a `data-i18n="<key>"` attribute gets its `textContent` set from the translations dict; an element with `data-i18n-aria="<key>"` gets its `aria-label` set from the same dict. Language state persists in `localStorage` as `preferredLanguage`. The language switcher uses flag `<button>`s (`data-lang`), and the active language is marked with `aria-pressed`.

**Theming**: Three-way. `:root` holds the light tokens; dark is applied either by `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` (follow the OS) or by an explicit `:root[data-theme="dark"]` (chosen with the toggle). The `.theme-toggle` button writes `data-theme` on `<html>` and persists it in `localStorage` as `theme`; no stored value means "follow the OS". Each page's `<head>` carries a tiny inline script that applies the stored theme **before first paint** so there is no flash — keep it there when adding a page.

**Page Structure**: The site follows a consistent pattern where:
- `index.html` serves as the homepage (hero + a "What I do" card grid pointing at articles/talks/teaching). It stays focused on data engineering — the Android apps are a hobby and live only on `pages/apps.html`, which sits late in the nav. Don't promote them onto the homepage.
- Section pages live in `pages/` directory (apps.html, articles.html, conferences.html, teaching.html, contact.html)
- Shared styles live in `css/common.css` (design tokens + header + shared components + responsive base); each page adds a small section-only stylesheet (`css/styles.css`, `apps.css`, `articles.css`, etc.)
- All pages load `css/common.css` + their page CSS, the Google Fonts stylesheet (Inter + Space Grotesk), and the single `js/common.js`
- All pages share the same `<header class="site-header">` and `<footer class="site-footer">`

**Shared components** (all in `css/common.css` — build new sections out of these rather than inventing per-page styles): `.container`, `.hero`, `.card` / `.card-grid` (`--wide`, `--compact`), `.app-card` / `.app-head` / `.app-icon`, `.badge` (`--live`, `--testing`), `.btn` (`--primary`, `--ghost`, `--sm`), `.page-heading`, `.section-heading`, `.eyebrow`, `.meta`, `.card-link` (stretches a link over its whole card).

**Navigation**: A sticky, translucent `<header class="site-header">` appears on all pages, containing the wordmark, `<nav class="top-menu">`, the language switcher and the theme toggle. Below 860px the nav collapses into a hamburger menu (`.menu-toggle`) that toggles the `.show` class on `<ul id="nav-list">`.

**Path References**: Pages in the `pages/` directory use relative paths with `../` to reference assets (CSS, JS, images) in the root directory structure.

## Key Implementation Patterns

**Translation System** (`js/common.js`):
1. One `translations` object with `en` and `gl` keys
2. `changeLanguage(lang)` loops over `[data-i18n]` elements and sets each `textContent` from `translations[lang][key]`
3. Persists language preference in `localStorage` as `preferredLanguage`
4. Loads saved language on `DOMContentLoaded`; also applies the theme toggle, marks the active nav link (`aria-current="page"`), wires the hamburger (auto-closes after a link tap), and fills `[data-year]` in the footer with the current year

To translate new content: add `data-i18n="myKey"` to the element and add `myKey` to both `en` and `gl` in `js/common.js`. Keys must exist in both dicts — a missing key leaves the element's text untouched, which silently shows the other language. Galician copy must never use `¡` or `¿`.

**Design Tokens**: `css/common.css` defines CSS custom properties in `:root` — colour (surface/text/accent), a fluid `clamp()` type scale (`--step--1` … `--step-5`), a 4px space scale (`--space-1` … `--space-12`), radii, shadows and `--gradient-accent`. Dark mode overrides only those tokens (see **Theming** above) — use the variables, never hardcode colors. The one deliberate exception is the flag `<img>` border, which is a fixed `rgba()` because it must hold against both a near-white and a near-black header.

**Responsive Design**: Mobile breakpoint at 860px transforms the navigation from horizontal to vertical dropdown menu, controlled by the hamburger icon. Headings and spacing scale fluidly via `clamp()`, so most sections need no extra breakpoint.

**SEO**: Each page has a unique `<title>`, `<meta name="description">`, canonical link, and Open Graph/Twitter tags; `index.html` carries JSON-LD `Person`. `robots.txt` and `sitemap.xml` live at the repo root — add new pages to the sitemap. `404.html` (root, absolute asset paths) is served by GitHub Pages for unknown routes.

## Development Notes

This is a static site hosted on GitHub Pages. There are no build steps, dependency installations, or testing frameworks. Changes are made directly to HTML, CSS, and JavaScript files and deployed via git push to the main branch.

To check a change locally, serve the repo (`python3 -m http.server 8000`) rather than opening files with `file://` — the relative `../` asset paths and `localStorage` both need a real origin.

## Apps page

`pages/apps.html` lists the Android apps from the companion `SCouto/android` monorepo, split into
**production** and **closed testing** by that repo's `release-config.properties`. App icons live in
`images/apps/<slug>.png`, exported from each app's `mipmap-xxxhdpi/ic_launcher.png` (for `valyrian`
and `russian`, which ship adaptive-only icons, the foreground is composited over the solid colour in
their `values/ic_launcher_background.xml`). Each closed-testing card's "become a tester" button points
at the shared Google Group `https://groups.google.com/g/scouto_android_testers`
(`scouto_android_testers@googlegroups.com`), which is the tester list on every closed-testing track.
When an app graduates to production, move its card to the first grid, swap `.badge--testing` for
`.badge--live` and point the button at `https://play.google.com/store/apps/details?id=<applicationId>`.
