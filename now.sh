{
  "version": 2,
  "builds": [
    {
      "src": "dist/apps/server/main.js",
      "use": "@now/node-server"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/apps/server/main.js"
    }
  ]
}
