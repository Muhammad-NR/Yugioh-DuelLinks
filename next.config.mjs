/** @type {import('next').NextConfig} */
// UBAH BARIS INI: Pakai library yang support App Router
import withPWAInit from "@ducanh2912/next-pwa"; 

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  
  // Masukkan aturan caching kamu ke dalam 'workboxOptions'
  // Library baru ini lebih rapi kalau custom cache ditaruh di sini
  workboxOptions: {
    runtimeCaching: [
      // 1. Cache untuk API (Cards, Decks, Skills)
      {
        urlPattern: /\/api\/.*/i, 
        handler: "NetworkFirst",
        options: {
          cacheName: "api-data",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 24 * 60 * 60, // 24 jam
          },
          networkTimeoutSeconds: 10,
        },
      },
      // 2. Cache untuk Gambar (Kartu & Ikon)
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|webp|gif)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 7 * 24 * 60 * 60, // 1 minggu
          },
        },
      },
      // 3. Cache untuk Font & CSS
      {
        urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "static-font-assets",
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 7 * 24 * 60 * 60,
          },
        },
      },
      // 4. Fallback sisanya
      {
        urlPattern: /.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "others",
          expiration: {
            maxEntries: 32,
            maxAgeSeconds: 24 * 60 * 60,
          },
        },
      },
    ],
  },
});

const nextConfig = {
  // turbopack: {}, 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withPWA(nextConfig);