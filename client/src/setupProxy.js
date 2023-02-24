const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://foods-backend.up.railway.app/',
            changeOrigin: true,
        })
    );
};