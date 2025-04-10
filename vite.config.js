import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path"
import ViteSitemap from 'vite-plugin-sitemap';
import viteImagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteSitemap({
      siteUrl: 'http://localhost:4173'
    }),
    viteImagemin({
      pngquant: {
        quality: [0.6, 0.8],
      },
      mozjpeg: {
        quality: 70,
        svgo: {
          plugins: [
            { removeViewBox: false },
          ],
        },
        gifsicle: {
          optimizationLevel: 3,
        },
        webp: {
          quality: 75,
        },
      }
    }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
