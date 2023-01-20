import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV
    ? "http:localhost:3000"
    : "https://chan.dev",
});
