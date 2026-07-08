import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    // Prefer AVIF (smallest) then WebP, falling back to the source format.
    formats: ["image/avif", "image/webp"],
    // These marketing images are stable; cache optimized variants for a year
    // instead of the 60s default so repeat visits never re-fetch them.
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        // Static images referenced directly (not through the /_next/image
        // optimizer) — long-lived immutable caching.
        source: "/assests/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
