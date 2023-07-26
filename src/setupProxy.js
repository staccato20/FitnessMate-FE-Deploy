const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // baseUrl
      target: "http://112.187.189.12:8080",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
