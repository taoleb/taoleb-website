# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Astro using the vhAstro-Theme. It's a Chinese-language blog focused on frontend development, technology sharing, and personal content.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (runs on localhost:4321 by default)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Create new blog post
pnpm newpost "文章标题"

# Toggle dev toolbar
pnpm offdev  # disable
pnpm ondev   # enable
```

## Architecture

### Content Structure
- **Blog posts**: Located in `src/content/blog/` as Markdown files
- **Static pages**: Located in `src/pages/` (about, links, talking, etc.)
- **Page data**: Dynamic content configurations in `src/page_data/`

### Key Components
- **Layout system**: Main layouts in `src/layouts/`
- **Reusable components**: Modular components in `src/components/`
- **Scripts**: Client-side functionality in `src/scripts/`
- **Styling**: Less stylesheets co-located with components

### Configuration
- **Main config**: `src/config.ts` - Contains site metadata, theme settings, navigation, and feature toggles
- **Content schema**: `src/content.config.ts` - Defines blog post frontmatter schema
- **Astro config**: `astro.config.mjs` - Build settings, integrations, and markdown configuration

### Blog Post Frontmatter
Required fields: `title`, `date`, `categories`, `tags`, `id`
Optional fields: `updated`, `cover`, `recommend`, `top`, `hide`

### Key Features
- Responsive design with Less styling
- Page transitions via Swup
- Chinese font support (HarmonyOS Sans SC)
- Comment systems (Twikoo/Waline)
- Search functionality
- Analytics integration
- RSS/Sitemap generation

### Deployment
The project is configured for deployment to Cloudflare Pages (see `wrangler.jsonc`) and supports various static hosting platforms.