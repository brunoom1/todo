module.exports = {
  apps: [
    {
      name: "Todo API",
      script: "./api/index.js",
      watch: true,
      env: {
        'PORT': 3000,
        'NODE_ENV': 'development',
        'NODE_PATH': './api:./api/src'
      }
    }
  ]
}