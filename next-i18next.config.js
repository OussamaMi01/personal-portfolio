// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  // Every namespace used anywhere in the app must be listed here
  ns: [
    'common',
    'home',
    'about',
    'experience',
    'projects',
    'services',
    'testimonials',
    'blog',
    'contact'
  ],
  defaultNS: 'common',
  // Ensure locale files are loaded from the correct path
  localePath: './public/locales',
};