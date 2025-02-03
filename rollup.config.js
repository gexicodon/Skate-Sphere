import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";

export default {
  input: "App.svelte",
  output: {
    file: "build/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    svelte(),
    resolve({
      browser: true,
      dedupe: ["svelte"]
    }),
    commonjs(),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
  },
};
