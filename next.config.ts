import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    "baseUrl": ".",
    "paths": {
        "@/*": ["./*"]
    },
};

export default nextConfig;
