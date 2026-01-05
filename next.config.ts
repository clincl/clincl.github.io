import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Uncomment and set this to your GitHub repository name for GitHub Pages
  // basePath: '/portfolio-website',
  // assetPrefix: '/portfolio-website',
};

export default nextConfig;
