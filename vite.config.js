import { defineConfig } from "vite";
import VitePluginSass from "vite-plugin-sass";

export default defineConfig({
  build: {},
  server: {},
  optimizeDeps: {},
  ssr: {
    noExternal: [],
    rollupOptions: {
      input: "./src/main.server.ts",
      output: {
        dir: "./dist/shamps-lp/server",
        format: "cjs",
      },
      plugins: [VitePluginSass()],
    },
  },
});
