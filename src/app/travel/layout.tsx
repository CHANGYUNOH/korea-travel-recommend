import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DarkNav from "@/components/layout/DarkNav";
import "@/styles/base/layout.scss";

interface SubLayoutProps {
	children: React.ReactNode;
}

export default function SubLayout({ children }: SubLayoutProps) {
	return (
		<section className='wrapper'>
			<Header />
			{/* <DarkNav/> */}
			<section className='container'>{children}</section>
			<Footer />
		</section>
	);
}
