# Bribri Cultural Tours

Website for **Bribri Cultural Tours**, an eco-tourism business offering authentic cultural, rainforest and Caribbean experiences in Costa Rica.

The site presents local tours, detailed experience information, responsible-travel policies, gallery media, guide information, reviews and direct contact through WhatsApp.

## Highlights

- Responsive design for desktop, tablet and mobile.
- Video hero section with custom controls.
- Experience cards with filters, pricing and detailed modal views.
- Gallery for images and videos.
- English-language interface and SEO metadata.
- WhatsApp contact buttons and social media links.
- Downloadable tour catalog in PDF format.
- Google Reviews widget integration.
- GitHub Pages deployment workflow.

## Tech Stack

- TypeScript
- HTML
- CSS
- Vite
- GitHub Pages

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated files are placed in the `dist/` directory.

## Project Structure

```text
BribriCulturalTours/
├── public/
│   ├── assets/              # Images, videos, logos and icons
│   ├── *.pdf                # Tour catalog
│   ├── CNAME                # Custom domain for GitHub Pages
│   ├── robots.txt           # Search-engine crawling rules
│   └── sitemap.xml          # Search-engine sitemap
├── src/
│   ├── main.ts              # Application structure and interactions
│   ├── style.css            # Global styles and responsive layout
│   └── vite-env.d.ts        # Vite type declarations
├── .github/workflows/       # Automatic GitHub Pages deployment
├── index.html               # SEO metadata and application entry point
└── package.json
```

## Deployment

The project is configured to deploy through GitHub Pages. After pushing changes to the `main` branch, GitHub Actions builds and publishes the new version automatically.

```bash
git add .
git commit -m "Update website"
git push
```

Production URL:

https://www.bribriculturaltours.com

## Content Updates

Most tour content and interactions are managed in:

```text
src/main.ts
```

Images, videos, icons and downloadable files belong in:

```text
public/assets/
```

Keep media optimized for the web whenever possible. WebP or AVIF images and compressed MP4 videos help the site load faster.

## Project Goal

Bribri Cultural Tours uses technology to support respectful tourism, cultural exchange and meaningful connections with Bribri communities and the Caribbean territory of Costa Rica.
