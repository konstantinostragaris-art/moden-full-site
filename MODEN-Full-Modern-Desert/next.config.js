/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { typedRoutes: false },
  i18n: {
    locales: ['el', 'en'],
    defaultLocale: 'el',
    localeDetection: true,
  },
  async redirects() {
    return [
      { source: '/el', destination: '/', permanent: true },
      { source: '/el/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

module.exports = nextConfig;
