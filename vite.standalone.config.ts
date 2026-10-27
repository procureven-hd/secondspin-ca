import { defineConfig, mergeConfig } from "vite";
import path from "path";
import base from "./vite.config";

// Builds a preview of the site whose images are embedded, for scripts/build-standalone.py
// to fold into one shareable HTML file. Not used for the live site.
export default mergeConfig(
  base,
  defineConfig({
    base: "./",
    define: { "import.meta.env.VITE_STANDALONE": JSON.stringify("1") },
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/standalone"),
      assetsInlineLimit: 100_000_000,
      cssCodeSplit: false,
      modulePreload: false,
      rollupOptions: { output: { inlineDynamicImports: true } },
    },
  }),
);
