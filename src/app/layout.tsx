import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/base/global.scss'
import '@/styles/base/layout.scss'
import '@/styles/base/reset.scss'

const pretendardTitle = localFont({
	src : './fonts/pretendard-ExtraBold.woff',
	variable: '--font-pretendard-ExtraBold.woff2',
	weight: '100 900',
})

const pretendard = localFont({
	src: './fonts/Pretendard-Regular.woff',
	variable: '--font-pretendard',
	weight: '100 900',
})



export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body className={`${pretendardTitle.variable} ${pretendard.variable}`}>{children}</body>
		</html>
	);
}
