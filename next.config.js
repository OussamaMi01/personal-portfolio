module.exports = {
   env: {
    // Only expose PUBLIC environment variables here
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  webpack: (config) => {
    // Remove sensitive env vars from webpack DefinePlugin
    config.plugins.forEach((plugin) => {
      if (plugin.constructor.name === 'DefinePlugin') {
        delete plugin.definitions['process.env.EMAIL_USER'];
        delete plugin.definitions['process.env.EMAIL_PASS'];
        delete plugin.definitions['process.env.EMAIL_HOST'];
        delete plugin.definitions['process.env.EMAIL_PORT'];
        delete plugin.definitions['process.env.EMAIL_TO'];
      }
    });
    return config;
  },
  reactStrictMode: true,
};