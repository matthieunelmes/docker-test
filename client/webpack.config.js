const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv-webpack");
const tailwindcss = require("tailwindcss");

module.exports = (env) => ({
  mode: "development",
  entry: "./src/index.tsx",
  devtool: false,
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
      {
        test: /\.(webp|jpe?g|svg|png)$/i,
        loader: "file-loader",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [tailwindcss],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new dotenv({
      path: `.${env.ENVIRONMENT}.env`,
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
});
