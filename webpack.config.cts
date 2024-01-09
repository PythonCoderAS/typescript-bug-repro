import { resolve } from "path";
// eslint-disable-next-line import/no-extraneous-dependencies -- This isn't included in the bundle
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|\.d\.ts$/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
    library: "templib",
  },
  devtool: "source-map",
};

export default config;
