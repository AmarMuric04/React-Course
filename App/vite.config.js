import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Animations": path.resolve(__dirname, "src/components/Animations"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Utility": path.resolve(__dirname, "src/utils"),
      "@Icons": path.resolve(__dirname, "src/icons"),
      "@GlobalComponents": path.resolve(__dirname, "src/components/Global"),
      "@Home": path.resolve(__dirname, "src/components/HomePage/Sections"),
    },
  },
});
