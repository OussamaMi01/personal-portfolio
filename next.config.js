// next.config.js
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  env: {
    // Only expose PUBLIC environment variables here
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_ADMIN_USERNAME: process.env.NEXT_PUBLIC_ADMIN_USERNAME,
    NEXT_PUBLIC_ADMIN_PASSWORD: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
  },
  webpack: (config, { isServer }) => {
    // Remove sensitive env vars from webpack DefinePlugin (client-side only)
    if (!isServer) {
      config.plugins.forEach((plugin) => {
        if (plugin.constructor.name === 'DefinePlugin') {
          delete plugin.definitions['process.env.EMAIL_USER'];
          delete plugin.definitions['process.env.EMAIL_PASS'];
          delete plugin.definitions['process.env.EMAIL_HOST'];
          delete plugin.definitions['process.env.EMAIL_PORT'];
          delete plugin.definitions['process.env.EMAIL_TO'];
          delete plugin.definitions['process.env.JWT_SECRET'];
        }
      });
    }
    return config;
  },
  reactStrictMode: true,
  // Optional: Configure image domains if needed
  images: {
    domains: ['localhost', 'oussama-missaoui.netlify.app'],
    // If using static export
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Optional: Configure trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;