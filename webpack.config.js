const fs = require("fs");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolve = (relativePath) => path.resolve(appDirectory, relativePath);
const host = process.env.HOST || "localhost";

module.exports = {
  entry: [resolve("example/example.ts")],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        include: resolve("src"),
        loader: "ts-loader"
      }
    ]
  },
  devServer: {
    contentBase: resolve("example"),
    compress: true,
    hot: true,
    host,
    port: 3000,
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve('example/index.html'),
    }),
  ]
};
