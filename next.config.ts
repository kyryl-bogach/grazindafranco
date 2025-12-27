import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
