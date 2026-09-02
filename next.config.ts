import type { NextConfig } from "next";

const localNetworkOrigin = process.env.LOCAL_NETWORK_ORIGIN;

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "127.0.0.1",
    ...(localNetworkOrigin ? [localNetworkOrigin] : []),
  ],
};

export default nextConfig;
