const { VueSeparatePlugin } = require('vue-separate-webpack-plugin')


module.exports = {
  chainWebpack: config => {
    // Prettier-ignore
    config.resolve
      .plugin('vue-separate-webpack-plugin')
      .use(VueSeparatePlugin)
      .end()
  },
}
