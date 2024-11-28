'use client';

// 테마별 여행지
import '@/styles/pages/theme.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Themes() {

    // 테마 이름
    const region = ['반려동물 동반 여행', '친환경 관광', '캠핑장', '레저여행']

    return (
        <>
            {/* 테마별 여행지 */}
            <div className='area'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    className="region">
                    {region.map((item, index) => (
                        <SwiperSlide key={index}>
                            <li className="region-list">
                                <a href="#" className="region-list-item">
                                    <img/>
                                    <span>{item}</span>
                                </a>
                            </li>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* EOD : 테마별 여행지 */}
        </>
    );
}