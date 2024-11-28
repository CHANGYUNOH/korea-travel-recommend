import Link from 'next/link';

export default function Footer() {

    const quickLinks = [
        {
            name: '지역별 여행지',
            link: 'regions'
        },
        {
            name: '테마별 여행지',
            link: 'themes'
        },
        {
            name: '근처 여행지 찾기',
            link: 'nearby'
        },
        {
            name: '지역 축제',
            link: 'festivals'
        }
    ]

    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            {quickLinks.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link}
                                        className="hover:text-blue-400 transition-colors"
                                        style={{ color: '#fff' }}
                                    >
                                        {item.name}
                                    </Link>
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
            </div>
        </footer>
    );
}