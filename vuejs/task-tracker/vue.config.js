module.exports = {
  // Proxy que, no ambiente de desenvolvimento, intercepta qualquer rota que tenha /api e redireciona para o target abaixo
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
