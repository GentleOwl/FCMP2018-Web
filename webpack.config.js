const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin([
      path.resolve(__dirname, 'dist')
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss'],
  },
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": {
                  "browsers": "last 2 versions, ie 11"
                },
                "useBuiltIns": "usage"
              }
            ]
          ]
        }
      }
    }, {
      test: /\.(sa|sc|c)ss$/,
      include: [
        path.resolve(__dirname, 'src/styles')
      ],
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      use: [{
        loader: "file-loader"
      }]
    }]
  }
};