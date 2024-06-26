const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve");
const commomnjs = require("@rollup/plugin-commonjs");

const outDir = "lib";

module.exports = {
  input: "./src/index.ts",
  output: {
    dir: outDir,
    format: "esm",
    entryFileNames: "[name].mjs",
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    commomnjs(),
    typescript({
      tsconfig: "tsconfig.json",
      module: "ESNext",
      target: "ESNext",
    }),
  ],
};
