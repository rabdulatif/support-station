import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// base — GitHub Pages project sub-path (https://<user>.github.io/support-station/).
// Local dev (`vite`) foydalanadigan BASE_URL avtomatik "/" bo'ladi.
export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/support-station/" : "/",
  plugins: [react(), tailwindcss()],
});
