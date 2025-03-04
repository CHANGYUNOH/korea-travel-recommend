"use client";

import Link from 'next/link';
import '@/styles/components/header.scss';
import '@/styles/components/footer.scss';
import { usePathname, useRouter } from "next/navigation";
import { useState } from 'react';

export default function Header() {
    const pathname = usePathname(); // 현재 경로 가져오기 

    const menuList = [
        {
            name: '지역별 여행지',
            route: 'regions'
        },
        {
            name: '테마별 여행지',
            route: 'themes'
        },
        {
            name: '근처 여행지 찾기',
            route: 'nearby'
        },
        {
            name: '지역 축제',
            route: 'festivals'
        }
    ]

    const [mobMenu, setMobMenu] = useState(false);

    const btnClose = () => {
        setMobMenu(false);
    }

    const router = useRouter();

    const moveRoute = (item: any) => {
        router.push(`/travel/${item.route}`);
        setMobMenu(false);
    }

    return (
        <>
            <header className="header">
                <div className="header-wrap">
                    {/* 로고 */}
                    <Link
                        href="/"
                        className="header-wrap-link"
                    >
                        <strong>KTR</strong>
                    </Link>

                    {/* 네비게이션 */}
                    <nav className="header-wrap-nav">
                        {menuList.map((item, index) => (
                            <Link
                                key={index}
                                href={`/travel/${item.route}`}
                                className={`${pathname.includes(item.route) ? 'is-active' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 모바일 메뉴 아이콘 */}
                    <button
                        className="btn-mob"
                        onClick={() => setMobMenu(!mobMenu)}
                        aria-label="Open menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </header>
            <div className={`mob-menu ${mobMenu ? 'is-active' : ''}`}>
                <div className="mob-menu-header">
                    <a
                        href="#top"
                        data-section-id="top"
                        className="logo">
                        <span>KTR</span>
                    </a>
                    <button type="button" className="btn-close" onClick={() => btnClose()}>
                        X
                    </button>
                </div>
                <ul className="mob-menu-cont">
                    {menuList.map((item, index) => (
                        <li className="mob-menu-cont-list" key={index}>
                            <button onClick={() => moveRoute(item)} className="mob-menu-cont-list-link">{item.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
