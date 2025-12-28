import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    qualities: [75, 85, 95],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
