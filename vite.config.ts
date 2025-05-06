import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Days-Until-Moving-Out/",
  build: {
    outDir: "docs",
    emptyOutDir: true, // this causes docs/ to be wiped before each build
  },
  plugins: [react()],
});
