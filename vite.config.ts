import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

import pkg from "./package.json";

// UnoCSS
import Unocss from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind4,
} from "unocss";

export default defineConfig({
  define: {
    '__APP_VERSION__': JSON.stringify(pkg.version),
  },
  plugins: [
    vue(),
    vueDevTools(),
    Unocss({
      presets: [
        presetAttributify(),
        presetWind4(),
        presetIcons(),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: ["Noto Sans JP"],
            mono: ["JetBrains Mono"],
          },
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
