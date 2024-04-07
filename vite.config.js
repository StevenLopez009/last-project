import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Isla JavaScript",
        short_name: "IslaJS",
        description: "Mi Progressive Web App",
        theme_color: "#ffffff",
        icons: [
          {
            src: "src/assets/img/icono.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "src/assets/img/icono.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
