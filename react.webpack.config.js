const path = require('path');
const defPath = "./build/src/webpack/react/src/Page/";

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  entry: {
    StoriesTemplates: defPath + 'StoriesTemplates/StoriesTemplates.js',
    MyStories: defPath + 'MyStories/MyStories.js',
    // ProductPage: defPath + 'ProductPage/ProductPage.js',
    // PageOption: defPath + 'PageOption/PageOption.js',
    // PageSiteCreator: defPath + 'PageSiteCreator/PageSiteCreator.js',
    PageAvatarMaker: defPath + 'PageAvatarMaker/PageAvatarMaker.js',
    PageCreateAvatarGame: defPath + 'PageCreateAvatarGame/PageCreateAvatarGame.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/web/work/js/webpack/react'),
    filename: "[name].js"
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'css/[name].css',
  })],
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["transform-regenerator"],
        }
      }
    },
    {
      test: /\.less$/i,
      use: [MiniCssExtractPlugin.loader,
        "css-loader",
        "less-loader",
      ],
    },
    {
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
      ],
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg|png|jpg)(\?v=\d+\.\d+\.\d+)?$/,
      use: ["url-loader"]
    }
    ]
  },
};