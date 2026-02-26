# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static personal portfolio website (GitHub Pages) for Sergio Couto, featuring bilingual support (English and Galician). The site is built with vanilla HTML, CSS, and JavaScript without any build tools or frameworks.

## Architecture

**Multi-language System**: Each page has its own JavaScript file that manages translations. Translations are stored in `translations` objects within each JS file, with language state persisted in `localStorage`. The language switcher is implemented consistently across all pages using flag images that trigger language switching.

**Page Structure**: The site follows a consistent pattern where:
- `index.html` serves as the homepage
- Section pages live in `pages/` directory (articles.html, conferences.html, teaching.html, contact.html)
- Each page has corresponding CSS in `css/` and JavaScript in `js/`
- All pages share the same navigation structure and language switcher

**Navigation**: A sticky top menu (`<nav class="top-menu">`) appears on all pages with a mobile-responsive hamburger menu (`.menu-toggle`). The menu collapses on mobile devices using the `.show` class toggle.

**Path References**: Pages in the `pages/` directory use relative paths with `../` to reference assets (CSS, JS, images) in the root directory structure.

## Key Implementation Patterns

**Translation System**: Each page's JavaScript file:
1. Defines a `translations` object with `en` and `gl` keys
2. Implements a `changeLanguage(lang)` function that updates DOM elements by ID
3. Persists language preference in `localStorage` as `preferredLanguage`
4. Loads saved language on `DOMContentLoaded`

**Responsive Design**: Mobile breakpoint at 768px transforms the navigation from horizontal to vertical dropdown menu, controlled by the hamburger icon.

## Development Notes

This is a static site hosted on GitHub Pages. There are no build steps, dependency installations, or testing frameworks. Changes are made directly to HTML, CSS, and JavaScript files and deployed via git push to the main branch.
