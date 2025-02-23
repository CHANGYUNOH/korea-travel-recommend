"use client"

import React, {useEffect} from "react";
import '@/styles/pages/main.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import axios from 'axios';
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {useRouter} from "next/navigation";

export default function Main() {

    useEffect(() => {
        console.log("useEffect");
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/v1/sample');
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const banner_images = [
        { id: "Seoul,Gyeonggi" , img : '/images/main_seoul.png' },
        { id : "Gangwon" , img: '/images/main_gangwon.png' },
        { id : "Busan,Ulsan,South_Gyeongsang", img: '/images/main_busan.png' },
        { id : "Daegu,North_Gyeongsang", img: '/images/main_daegu.png' },
        { id : "Jeju", img: '/images/main_jeju.png' },
        { id : "North_Chungcheong,Sejong", img : '/images/main_north_Chungcheong.png' },
        { id : "North_Jeolla",img: '/images/main_north_Jeolla.png' },
        { id : "South_Chungcheong,Daejeon",img: '/images/main_south_chungcheong.png' },
        { id : "South_Jeolla",img: '/images/main_south_Jeolla.png' },

    ]



    const tourList = [
        {
            title: '고성 통일전망타워',
            locale: '강원 고성군',
            tag: ['역사공부', '전쟁역사'],
            image: '/images/list_sample_1.png'
        },
        {
            title: '해인사(합천)',
            locale: '경남 합천군',
            tag: ['휴식하기좋은곳', '전통사찰'],
            image: '/images/list_sample_2.png'
        },
        {
            title: '죽녹원',
            locale: '전남 담양군',
            tag: ['2024_여행가는달과함께하는_발도장여행지', '반려동물동반여행지'],
            image: '/images/list_sample_3.png'
        }
    ];



    const themeList = [
        {
            title: '반려동물 동반여행',
            sub: '반려동물과 함께 할 여행지',
            id: 'animal',
            link: '/travel/themes/animal?name=반려동물+동반+여행'
        },
        {
            title: '친환경 여행',
            sub: '자연 친화적 관광지와 생태 관광지',
            id: 'natural',
            link: '/travel/themes/natural?name=친환경+관광'
        },
        {
            title: '캠핑장',
            sub: '전국 캠핑장 정보를 제공',
            id: 'camping',
            linK: '/travel/themes/camping?name=캠핑장'
        },
        {
            title: '레저여행',
            sub: '두루누비 서비스',
            id: 'leisure',
            link: '/travel/themes/leisure?name=걷기여행'
        }
    ]
    const router = useRouter();

    const handleClick = (id: string) => {
        router.push(`/travel/regions?region=${encodeURIComponent(id)}`);
    };

    return (
        <div className='container'>
            <div className="slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{clickable: true}}
                    autoplay={{delay: 3000}}
                    loop={true}
                >
                    {banner_images.map((src, index) => (
                        <SwiperSlide key={index} onClick={() => handleClick(src.id)}>
                            <div className="bg" style={{ backgroundImage: `url(${src.img})`, cursor: 'pointer' }}></div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>


            <div className="list">
                <div className='list-title'> 🔥 어디 갈지 고민된다면? 추천 여행지 BEST 3 </div>
                <div className="list-card">
                    <Swiper
                        spaceBetween={20} // 각 슬라이드 간 간격
                        slidesPerView={3} // 한 번에 표시할 슬라이드 수
                        modules={[Pagination, Autoplay, Navigation]} // Pagination 모듈 추가
                        pagination={{clickable: true}} // 페이지네이션 활성화
                        navigation // 네비게이션 버튼 활성화
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: {slidesPerView: 3, spaceBetween: 20}, // 큰 화면
                            768: {slidesPerView: 2, spaceBetween: 15}, // 태블릿
                            480: {slidesPerView: 1, spaceBetween: 10}, // 모바일
                        }}
                    >
                        {tourList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <li className="list-card-item">
                                    <Link
                                        href={{
                                            pathname: `/travel/regions/${index + 1}`,
                                            query: {
                                                title: item.title,
                                                locale: item.locale,
                                                tag: JSON.stringify(item.tag),
                                                image: item.image,
                                            },
                                        }}
                                        className="list-card-item-link"
                                    >
                                        <div className="img">
                                            <img
                                                src={`/images/list_sample_${index + 1}.png`}
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="info">
                                            <div className="info-title">{item.title}</div>
                                            <p className="info-locale">{item.locale}</p>
                                        </div>
                                    </Link>
                                </li>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className='theme'>
                <div className='theme-title'>🎯 내 취향에 딱 맞는 맞춤형 여행 추천</div>
                <ul className='theme-cont'>
                    {themeList.map((item, index) => (
                        <li className='theme-cont-list' key={index}>
                            <div className={`theme-cont-list-item ${item.id}`}>
                                <div className='info'>
                                    <div className='title'>{item.title}</div>
                                    <p className='sub'>{item.sub}</p>
                                    <a href={item.link} className='btn-more'>
                                        <span className='txt'>자세히 보기</span>
                                        <img src='/svg/chevron_right.svg' className="size-6" alt="자세히 보기"/>
                                    </a>
                                </div>
                                {item.id === 'animal' ? (<div className='svg'>
                                    <img src="/svg/animal.svg" alt="animal"/>
                                </div>) : null}


                                {item.id === 'natural' ? (
                                    <div className='svg'>
                                        <img src="/svg/natural.svg" alt="natural"/>
                                    </div>
                                ) : null}
                                {item.id === 'camping' ? (
                                    <div className='svg'>
                                        <img src="/svg/camping.svg" alt="camping"/>
                                    </div>
                                ) : null}
                                {item.id === 'leisure' ? (
                                    <div className='svg'>
                                        <img src="/svg/bike.svg" alt="bike"/>
                                    </div>
                                ) : null}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
