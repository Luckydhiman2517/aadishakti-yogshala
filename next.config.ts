import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    // Next 16 only serves qualities listed here.
    qualities: [75, 85, 88, 90],
    deviceSizes: [360, 480, 640, 828, 1080, 1280, 1600, 1920, 2560, 3840],
  },
};

export default nextConfig;
