# typescript-bug-repro
Repro for typescript cts files

## Instructions to repro

1. `npm install`
2. `npm run build-ts`

## Expected output

```js
const { resolve } = require("path");
const config = resolve(__dirname, "config.cts");
module.exports = config;
//# sourceMappingURL=config.cjs.map
```

## Actual Output

```js
import { resolve } from "path";
const config = resolve(__dirname, "config.cts");
module.exports = config;
//# sourceMappingURL=config.cjs.map
```
