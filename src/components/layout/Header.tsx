"use client";

import Link from 'next/link';
import '@/styles/components/header.scss';
import '@/styles/components/footer.scss';
import { usePathname } from "next/navigation";

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

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50 dark:bg-gray-900/70">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    {/* 로고 */}
                    <Link
                        href="/"
                        className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight"
                    >
                        대표 로고 이미지
                    </Link>

                    {/* 네비게이션 */}
                    <nav className="hidden md:flex space-x-8">
                        {menuList.map((item, index) => (
                            <Link
                                key={index}
                                href={`/travel/${item.route}`}
                                className={`text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium ${pathname.includes(item.route) ? 'is-active' : ''}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 모바일 메뉴 아이콘 */}
                    <button
                        className="md:hidden flex items-center text-gray-600 dark:text-gray-300"
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
            <nav className='mob-menu'>
                <div>
                    <Link href='/'>대표 로고 이미지</Link>
                    <button>X</button>
                </div>
                <ul>
                    <li>
                        <Link href='/'>지역별 여행지</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
