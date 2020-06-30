import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
      },
      {
        dir: "dist",
        format: "es",
        entryFileNames: "[name].mjs",
      },
    ],
    external: [],
    plugins: [typescript({})],
  },
];
