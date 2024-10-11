import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            manifest: {
                name: "NSKitchen",
                short_name: "NSK",
                description: "Restraunt operation app",
                icons: [
                    {
                        src: "/PWA/manifest-icon-192.maskable.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/PWA/manifest-icon-512.maskable.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/PWA/manifest-icon-512.maskable.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
                theme_color: "#ffffff",
                background_color: "#ffffff",
                display: "standalone",
                start_url: "/login",
                scope: "/",
                orientation: "portrait",
                prefer_related_applications: false,
            },
            devOptions: {
              enabled: true  // Enables service worker in dev mode for testing
            }
        }),
    ],
    // Add other configuration as needed
});
