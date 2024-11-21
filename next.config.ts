import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: "/api/:path*", // API 요청만 프록시
                destination: "http://localhost:8181/api/:path*", // 서버 주소
            },
        ];
    },
};

export default nextConfig;