const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/app.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|zip/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/manifest.json", to: "manifest.json" },
        { from: "./src/popup.html", to: "popup.html" },
        { from: "./src/icon.png", to: "icon.png" },
        { from: "./src/styles.css", to: "styles.css" },
      ],
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
