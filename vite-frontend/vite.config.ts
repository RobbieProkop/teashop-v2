import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      // setup the plugin
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  server: {
    // proxy requests prefixed '/api' and '/uploads'
    proxy: {
      "/api": "http://localhost:8080",
      "/uploads": "http://localhost:8080",
    },
  },
});
