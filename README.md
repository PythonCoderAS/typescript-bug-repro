# typescript-bug-repro
Repro for typescript cts files

## Instructions to repro

1. `npm install`
2. `npm run build-ts`

## Expected output

```js
const { resolve } = require("path");
const config = {
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
module.exports = config;
//# sourceMappingURL=webpack.config.cjs.map
```

## Actual Output

```js
import { resolve } from "path";
const config = {
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
//# sourceMappingURL=webpack.config.cjs.map
```
