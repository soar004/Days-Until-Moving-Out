import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: "/Days-Until-Moving-Out/",
  plugins: [react()],
});
