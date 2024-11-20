export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* 브랜드 소개 */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">대표 로고 이미지</h2>
                    <p className="text-sm">
                        국내 여행지 정보 플랫폼에 기반한 랜덤으로 여행지 추천 기능을 포함한 사이트입니다..
                    </p>
                </div>

                {/* 주요 링크 */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {["지역별 여행지", "테마별 여행지", "근처 여행지 찾기", "지역 축제"].map((link) => (
                            <li key={link}>
                                <a
                                    href='/sub'
                                    className="hover:text-blue-400 transition-colors"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 소셜 미디어 */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <ul className="flex space-x-4">
                        {[
                            { platform: "Twitter", href: "https://twitter.com", icon: "twitter" },
                            { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
                            { platform: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
                            { platform: "GitHub", href: "https://github.com", icon: "github" },
                        ].map(({ platform, href, icon }) => (
                            <li key={platform}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={platform}
                                >
                                    <i className={`fab fa-${icon} text-xl`}></i>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-10 border-t border-gray-700 pt-6 text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} MyBrand. All rights reserved.
                </p>
            </div>
        </footer>
    );
}