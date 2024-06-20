import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: /node_modules/,
      exclude: "node_modules/process-es6/**",
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    image(),
    postcss({
      modules: {
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
      extract: true, // Extract CSS to a separate file
      use: ["sass"],
    }),
  ],
};
