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
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        svgo: false, // 🔴 SVGO 최적화 비활성화 (중요)
                    },
                },
            ],
        });

        return config;
    }
};

export default nextConfig;
