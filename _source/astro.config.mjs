// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { rehypeLocalizeLinks } from "./src/lib/rehype-localize-links.mjs";

export default defineConfig({
  site: "https://beripay.net",
  trailingSlash: "always",
  build: {
    format: "directory",
    // GitHub Pages runs Jekyll, which hides folders starting with "_" (Astro's default "_astro").
    assets: "assets",
  },
  markdown: {
    rehypePlugins: [rehypeLocalizeLinks],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
