/* eslint-env node */

const { main, module, dependencies } = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: module,
        format: "esm",
        sourcemap: "inline",
      },
      {
        file: main,
        format: "cjs",
        sourcemap: "inline",
      },
    ],
    external: Object.keys(dependencies),
  },
];
