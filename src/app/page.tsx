
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Main from "@/components/layout/Main";
import '@/styles/base/global.scss';

export default function Home() {
	return <div className='wrapper'>
		<Header/>
		<Main/>
		<Footer/>
	</div>;
}
