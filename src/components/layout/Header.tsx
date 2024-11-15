import Link from 'next/link';

export default function Header() {
    return <header className='header'>
        <div className='header-wrapper'>
            <Link href='/' className='logo'>로고</Link>
            <ul className='menu'>
                <li className='menu-list'>메뉴1</li>
                <li className='menu-list'>메뉴2</li>
                <li className='menu-list'>메뉴3</li>
                <Link href='/login' className='menu-list login'>로그인</Link>
            </ul>
        </div>
    </header>;
}