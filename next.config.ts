import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimise les imports lucide-react (1300+ icônes → tree-shaking auto)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Images externes autorisées (Unsplash pour les photos lifestyle premium).
  // Next/Image refuse les domaines non whitelistés pour éviter les abus.
  // Pattern restrictif au CDN officiel Unsplash uniquement.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Formats modernes (WebP / AVIF auto selon le browser support)
    formats: ["image/avif", "image/webp"],
  },
  // Headers sécurité de base (cohérent avec le dashboard Smart Host existant)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
