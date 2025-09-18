const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy configuration
app.use('/proxy', createProxyMiddleware({
    target: 'www://spotify.com/', // Change this to the target URL you want to proxy
    changeOrigin: true,
    pathRewrite: {
        '^/proxy': '', // Remove /proxy from the request path
    },
}));

app.listen(PORT, () => {
    console.log(`Proxy server is running on port ${PORT}`);
});
