var webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
  context: __dirname,
  entry: {
    app: ["angular", "./source/index.ts"]
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === "test"
    })
  ],

  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: "pre",
        use: [
          {
            loader: "tslint-loader",
            options: {
              emitErrors: true,
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          { loader: "ng-annotate-loader" },
          { loader: "ts-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              },
            },
            { loader: "resolve-url-loader" },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            }]
        })
      },
      {
        test: /\.html$/,
        use: [
          { loader: "html-loader" }
        ]
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name]-[hash].[ext]" }
          }]
      }
    ],
    noParse: /ol\.js/
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  }
};

if (process.env.NODE_ENV === "production") {
  config.output.path = __dirname + "/dist";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;