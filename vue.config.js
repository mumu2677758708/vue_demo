module.exports = {
  devServer: {
    proxy: {
      "/fundClient": {
        target: "http://gateway.155.test.yirendai.com",
        changeOrigin: true
      },
    },
  }
};