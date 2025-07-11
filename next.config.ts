import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // To Generates static HTML/CSS/JS
  distDir: 'dist',  // Output folder (loaded in Chrome as unpacked extension)
  // To Add images.unoptimized: true if using Next.js Image
  images: {
    unoptimized: true, // Disables Image Optimization API 
  },
  // Enable TypeScript for ESLint 
  eslint: {
    dirs: ['src'],
  },
  // Enable source maps for debugging
  productionBrowserSourceMaps: true,
};

export default nextConfig;
