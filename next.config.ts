import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
     
      { protocol: "https", hostname: "accurate-alpaca-795.convex.cloud" }, // Added your convex domain
    ],
  },
};

export default nextConfig;
