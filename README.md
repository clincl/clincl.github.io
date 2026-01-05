# Portfolio Website - GitHub Pages Deployment

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## 🌟 Live Demo

**View the live site:** [https://clincl.github.io](https://clincl.github.io)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [GitHub Pages Deployment Setup](#github-pages-deployment-setup)
- [Local Development](#local-development)
- [Deployment Process](#deployment-process)
- [Configuration Details](#configuration-details)
- [Troubleshooting](#troubleshooting)

## ✨ Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **SPA Navigation**: Smooth scrolling and hash-based routing
- **Project Showcase**: Dedicated pages for individual projects
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized images and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages + GitHub Actions
- **Build**: Static Export for GitHub Pages compatibility

## 📁 Project Structure

```
portfolio-website/
├── .github/workflows/          # GitHub Actions workflow
│   └── deploy.yml             # Deployment configuration
├── public/                    # Static assets
│   ├── 404.html              # SPA routing fallback
│   ├── .nojekyll             # GitHub Pages Jekyll bypass
│   └── [assets]/             # Images, icons, etc.
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   └── projects/         # Project detail pages
│   ├── components/           # Reusable components
│   │   ├── Navbar.tsx        # Navigation component
│   │   ├── About.tsx         # About section
│   │   ├── Projects.tsx      # Projects showcase
│   │   └── ThemeToggle.tsx   # Theme switcher
│   └── data/                 # Static data
│       └── content.ts        # Portfolio content
├── next.config.ts            # Next.js configuration
├── tailwind.config.js        # Tailwind CSS config
└── package.json              # Dependencies and scripts
```

## 🚀 GitHub Pages Deployment Setup

This project is specifically configured for GitHub Pages deployment. Here's how the setup works:

### 1. Next.js Static Export Configuration

**File: `next.config.ts`**
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Generate static HTML/CSS/JS
  trailingSlash: true,        // Required for GitHub Pages
  images: {
    unoptimized: true,        // Static image handling
  },
  // basePath: '/repo-name',   // Uncomment for project sites
  // assetPrefix: '/repo-name', // Uncomment for project sites
};
```

**Key Settings:**
- `output: 'export'`: Generates static files instead of server-side rendering
- `trailingSlash: true`: Ensures URLs end with `/` for GitHub Pages compatibility
- `images: { unoptimized: true }`: Disables Next.js image optimization for static export

### 2. GitHub Actions Workflow

**File: `.github/workflows/deploy.yml`**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]        # Trigger on push to main branch
  workflow_dispatch:          # Allow manual triggering

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run export

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Workflow Breakdown:**
1. **Trigger**: Runs on push to `main` branch or manual dispatch
2. **Build Job**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds static site with `npm run export`
   - Uploads built files as artifact
3. **Deploy Job**:
   - Deploys artifact to GitHub Pages
   - Provides deployment URL

### 3. SPA Routing Support

**File: `public/404.html`**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Portfolio</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      // This script takes the current url and converts the path and query
      // string into just a query string, and then redirects the browser
      // to the new url with only a query string and hash fragment,
      // e.g., https://www.foo.tld/one/two?a=b&c=d#qwe, becomes
      // https://www.foo.tld/?/one/two&a=b~and~c=d#qwe
      // Note: this 404.html file must be at least 512 bytes for it to work
      // with Internet Explorer (it is currently > 512 bytes)

      // If you're creating a Project Pages site and NOT using a custom domain,
      // then set pathSegmentsToKeep to 1 (enterprise users may need to set it to > 1).
      // This way the code will only replace the route part and not the real directory.
      // For example, if your repository is 'my-repo', then the url
      // https://username.github.io/my-repo/one/two?a=b&c=d#qwe becomes
      // https://username.github.io/my-repo/?/one/two&a=b~and~c=d#qwe
      // Otherwise, leave pathSegmentsToKeep as 0.
      var pathSegmentsToKeep = 0;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

**Purpose**: Handles client-side routing for single-page applications on GitHub Pages. When a user visits a direct URL like `/projects/pantry-chef`, GitHub Pages serves this 404.html which redirects to `/?/projects/pantry-chef`, allowing the React app to handle the routing.

### 4. Query String Routing

**File: `src/app/page.tsx` (excerpt)**
```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Handle GitHub Pages query string routing
    const handleRoute = () => {
      const path = window.location.search.slice(2); // Remove '?/'
      if (path) {
        router.replace(path + window.location.hash);
      }
    };

    handleRoute();
    window.addEventListener('popstate', handleRoute);

    return () => window.removeEventListener('popstate', handleRoute);
  }, [router]);

  // ... rest of component
}
```

**How it works**: Converts query string URLs back to proper routes for Next.js routing.

### 5. Jekyll Bypass

**File: `public/.nojekyll`**
```
# This file tells GitHub Pages to not use Jekyll processing
# since we're serving a static site built with Next.js
```

**Purpose**: Prevents GitHub Pages from trying to process the site with Jekyll, which could interfere with the static files.

## 💻 Local Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/clincl/clincl.github.io.git
cd clincl.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Export static site (used by GitHub Actions)
- `npm run lint` - Run ESLint

## 🚀 Deployment Process

### For User/Organization Sites (username.github.io)

1. **Repository Setup**:
   - Create repository named `username.github.io`
   - Push code to `master` branch (default branch)

2. **GitHub Pages Configuration**:
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - Branch: (automatically detected)

3. **Automatic Deployment**:
   - Push to `master` branch triggers workflow
   - Site deploys to `https://username.github.io`

### For Project Sites (username.github.io/repo-name)

1. **Repository Setup**:
   - Create repository (any name)
   - Push code to `main` branch

2. **Configuration Changes**:
   - Uncomment `basePath` and `assetPrefix` in `next.config.ts`
   - Set to `/repo-name`

3. **GitHub Pages Configuration**:
   - Source: "GitHub Actions"
   - Site deploys to `https://username.github.io/repo-name`

## ⚙️ Configuration Details

### Environment Variables

No environment variables are required for this static site deployment.

### Build Configuration

The build process generates static files in the `out/` directory:
- HTML files for each page
- CSS and JavaScript bundles
- Optimized images and assets
- Service worker (if configured)

### Performance Optimizations

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js handles responsive images
- **Code Splitting**: Automatic route-based code splitting
- **Minification**: CSS and JS minified in production

## 🔧 Troubleshooting

### Common Issues

**1. 404 Errors on Direct Links**
- Ensure `public/404.html` exists and is properly configured
- Check that `pathSegmentsToKeep` is set correctly (0 for user sites, 1 for project sites)

**2. Images Not Loading**
- Verify `images: { unoptimized: true }` in `next.config.ts`
- Check that images are in the `public/` directory

**3. Styles Not Applying**
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`

**4. Deployment Fails**
- Check GitHub Actions logs for errors
- Ensure Node.js version matches (20)
- Verify all dependencies are in `package.json`

**5. Routing Issues**
- Confirm `trailingSlash: true` in `next.config.ts`
- Test query string routing logic

### Debug Commands

```bash
# Test static export locally
npm run export
npx serve out/

# Check build output
ls -la out/
```

## 📝 Development Notes

### Adding New Projects

1. Create new page in `src/app/projects/[project-name]/page.tsx`
2. Add project data to `src/data/content.ts`
3. Update navigation in components as needed

### Theme Customization

- Colors defined in `tailwind.config.js`
- CSS variables in `src/app/globals.css`
- Theme toggle logic in `ThemeToggle.tsx`

### Performance Monitoring

- Use browser dev tools to check Core Web Vitals
- Monitor bundle size with `npm run build`
- Test on various devices and network conditions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

---

**Built with ❤️ using Next.js and deployed on GitHub Pages**
