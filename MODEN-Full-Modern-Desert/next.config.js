/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  i18n: {
    // Ελληνικά default, Αγγλικά δεύτερη γλώσσα
    locales: ['el', 'en'],
    defaultLocale: 'el',
    localeDetection: true, // προαιρετικό: ανίχνευση browser language
  },
};

module.exports = nextConfig;
