const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        sourceMap: true,
        additionalData: `
          @import "@/assets/sass/variables.sass";
        `
      }
    }
  }
});
