module.exports = {
  apps: [
    {
      name: 'app',
      script: 'dist/apps/server/main.js',
      instances: 'max',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
