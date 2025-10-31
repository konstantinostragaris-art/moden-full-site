/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false,
  },
  i18n: {
    locales: ['el', 'en'], // Ελληνικά & Αγγλικά
    defaultLocale: 'el',   // Ελληνικά ως default
    localeDetection: false, // Προαιρετικά: αναγνωρίζει γλώσσα browser
  },
};

module.exports = nextConfig;
