module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
      @import "@/scss/_grid.scss";
      `
      }
    }
  },

  publicPath: ""
};
