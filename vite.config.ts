import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 75,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 75,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 75,
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
});
