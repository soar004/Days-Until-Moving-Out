import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Days-Until-Moving-Out/", // your GitHub Pages sub-path
  build: {
    outDir: "docs", // ← will create `/docs` instead of `/dist`
  },
  plugins: [react()],
});
