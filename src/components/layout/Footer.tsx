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
        <footer className="footer">
            <div className="footer-wrap">
                <div className="footer-info">
                    {/* 브랜드 소개 */}
                    <div className='footer-info-list'>
                        <h2 className="title">대표 로고 이미지</h2>
                        <p className="cont">
                            국내 여행지 정보 플랫폼에 기반한 랜덤으로 여행지 추천 기능을 포함한 사이트입니다..
                        </p>
                    </div>

                    {/* 주요 링크 */}
                    <div className='footer-info-list'>
                        <h3 className="title">Quick Links</h3>
                        <ul className="cont">
                            {quickLinks.map((item, index) => (
                                <li className="cont-list" key={index}>
                                    <Link
                                        className='cont-list-link'
                                        href={item.link}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer-etc">
                    <p className="footer-etc-inner">
                        © {new Date().getFullYear()} MyBrand. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}