/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Images are pre-optimised by scripts/optimize_images.py, so the built-in
  // optimiser is disabled to avoid consuming hosted image-optimisation quota.
  images: { unoptimized: true },
  // Long browser caching for static assets, so repeat visits don't re-request
  // them from the CDN. Rename an image file if its content ever changes.
  async headers() {
    const longCache = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
    return [
      { source: '/img/:path*', headers: longCache },
      { source: '/favicon.ico', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] },
    ];
  },
};

export default nextConfig;
