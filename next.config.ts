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
    webpack(config){
        config.module.rules.push({
            test : /\.svg$/, // 모든 .svg 파일 처리
            use : ["@svgr/webpack"], // @svgr/webpack 로더 사용
        });

        return config;
    }
};

export default nextConfig;