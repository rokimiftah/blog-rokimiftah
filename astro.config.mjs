import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "rose-pine-moon",
    },
  },
});
