const withCSS = require('@zeit/next-css')
const withSASS = require("@zeit/next-sass")

module.exports = withSASS(withCSS({

  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    return config
  },
  distDir: "../../dist/functions/next"
}))
