import Link from 'next/link';

export default function Header() {
    return (
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
                    {["지역별 여행지", "테마별 여행지", "근처 여행지 찾기", "지역 축제"].map((item, index) => (
                        <Link
                            key={item}
                            href={`/sub/${index + 1}`}
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* 액션 버튼 */}
                <Link
                    href="/login"
                    className="hidden md:inline-block px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                    로그인
                </Link>

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
    );
}
