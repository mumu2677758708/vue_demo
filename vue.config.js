module.exports = {
  devServer: {
    proxy: {
      "/fundClient": {
        target: "https://yingapi.yirendai.com",
        changeOrigin: true
      },
    },
  }
};