import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Days-Until-Moving-Out/", // your GitHub-Pages URL subpath
  build: {
    outDir: "docs", // write build into docs/
    emptyOutDir: true, // remove old files in docs/ first
  },
  plugins: [react()],
});
