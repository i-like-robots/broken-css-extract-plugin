const path = require('path');
const CSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    styles: "./src/styles.css",
    scripts: "./src/scripts.js"
  },
  output: {
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: CSSExtractPlugin.loader
          },
          {
            loader: require.resolve("css-loader")
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        ['dom-loaded']: {
          test (module) {
            return module.context.includes('dom-loaded')
          }
        }
      }
    }
  },
  plugins: [new CSSExtractPlugin()]
};