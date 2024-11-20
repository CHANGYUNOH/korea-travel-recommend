import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    /* proxy */
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `http://localhost:8181/:path*`,
            },
        ];
    },
};

export default nextConfig;