'use client';
import '@/styles/pages/regions.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import React, {useEffect, useState, useRef} from "react";
import Link from 'next/link';
import MapSVG from '@/assets/svg/korean_map.svg';

export default function Regions() {

    const regions = [
        { id: "Seoul", name: "서울", color: "#D0F4DE" }, // 기본 색상
        { id: "Busan", name: "부산", color: "#A2D2FF" },
        { id: "Daegu", name: "대구", color: "#D0F4DE" },
        { id: "Incheon", name: "인천", color: "#A2D2FF" },
        { id: "Gwangju", name: "광주", color: "#FFCCD5" },
        { id: "Daejeon", name: "대전", color: "#A2D2FF" },
        { id: "Ulsan", name: "울산", color: "#FFCCD5" },
        { id: "Gyeonggi", name: "경기", color: "#FFD1A9" },
        { id: "Gangwon", name: "강원", color: "#FDE2B9" },
        { id: "North_Chungcheong", name: "충북", color: "#FFCCD5" },
        { id: "South_Chungcheong", name: "충남", color: "#D0F4DE" },
        { id: "North_Jeolla", name: "전북", color: "#A2D2FF" },
        { id: "South_Jeolla", name: "전남", color: "#FFD1A9" },
        { id: "North_Gyeongsang", name: "경북", color: "#CDB4DB" },
        { id: "South_Gyeongsang", name: "경남", color: "#FDE2B9" },
        { id: "Jeju", name: "제주", color: "#D0F4DE" },
        { id: "Sejong", name: "세종", color: "#CDB4DB" },
    ];

    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    // 지역 클릭 핸들러
    const handleRegionToggle = (regionId: string) => {
        setSelectedItems((prev) => {
            const isSelected = prev.includes(regionId);
            const updatedItems = isSelected
                ? prev.filter((id) => id !== regionId) // 선택 해제
                : [...prev, regionId]; // 선택 추가

            // SVG에서 해당 경로의 색상을 업데이트
            const targetPath = document.querySelector(`#korean_map_svg__${regionId}`);
            const regionColor = regions.find((region) => region.id === regionId)?.color || "#fff";

            if (targetPath) {
                (targetPath as SVGElement).setAttribute("fill", isSelected ? "#fff" : regionColor);
            }

            return updatedItems;
        });
    };

    // 여행지 리스트
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
        },
        {
            title: '속초해수욕장',
            locale: '강원 속초시',
            tag: ['일출일몰명소', '속초해변'],
            image: '/images/list_sample_4.png'
        },
        {
            title: '여수 해상케이블카',
            locale: '전남 여수시',
            tag: ['2024_여행가는달과함께하는_발도장여행지', '반려동물동반여행지'],
            image: '/images/list_sample_5.png'
        },
        {
            title: '간월암(서산)',
            locale: '충남 서산시',
            tag: ['2024_여행가는달과함께하는_발도장여행지', '충청권'],
            image: '/images/list_sample_6.png'
        },
        {
            title: '국립중앙박물관',
            locale: '서울 용산구',
            tag: ['2024_여행가는달과함께하는_발도장여행지', 'RM'],
            image: '/images/list_sample_7.png'
        },
        {
            title: '속초 외옹치 바다향기로',
            locale: '강원 속초시',
            tag: ['반려동물동반여행지', '해안산책'],
            image: '/images/list_sample_8.png'
        },
    ];

    // 카드 리스트
    const cardList = [
        {
            title: '청도 프로방스 빛축제',
            place: '경북 청도군',
            period: '2024.11.1 ~ 2025.2.10',
            address: '경상북도 청도군 화양읍 이슬미로 272-23'
        },
        {
            title: '부산스토리텔링축제 [안녕한 사하]',
            place: '부산 연제구',
            period: '2024.11.1 ~ 2024.11.29',
            address: '부산광역시 연제구 중앙대로 1217(거제동)'
        },
        {
            title: '킹받는 크리스마스',
            place: '경기 용인시',
            period: '2024.11.23 ~ 2025.1.1',
            address: '경기도 용인시 기흥구 민속촌로90(보라동)'
        },
        {
            title: '서면 빛 축제',
            place: '부산 부산진구',
            period: '2024.10.2 ~ 2025.1.10',
            address: '부산광역시 부산진구 부전동'
        },
        {
            title: 'APAP 작품투어',
            place: '경기 안양시',
            period: '2024.4.2 ~ 2024.11.30',
            address: '경기도 안양시 만안구 예술공원로 180(안양동)'
        }
    ]

    const [hasTooltip, setHasTooltip] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null); // 툴팁 참조

    // 상태 토글 함수
    const handleTooltip = () => {
        setHasTooltip(!hasTooltip); // 상태를 반전
    };

    // 외부 클릭 감지
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setHasTooltip(false);
            }
        };

        if (hasTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [hasTooltip]);

    // 각 아이템에 대해 좋아요 상태를 저장할 배열을 생성
    const [likedItems, setLikedItems] = useState(
        tourList.map(() => false) // 초기값은 모두 false (좋아요 하지 않음)
    );

    const handleBtnLike = (index: number) => {
        // 해당 인덱스의 좋아요 상태를 토글
        setLikedItems((prevLikedItems) =>
            prevLikedItems.map((liked, i) =>
                i === index ? !liked : liked // 현재 아이템만 상태를 변경
            )
        );

        // 좋아요 버튼을 클릭했을 때 alert 메시지 표시
        alert(`좋아요가 ${likedItems[index] ? '취소' : '추가'}되었습니다.`);
    };

    return (
        <div className="region-list">
            {/* 제목 */}
            <div className="title">
                지도로 찾아보는 <strong>지역별 여행지</strong>
            </div>
            {/* 지도 */}
            <div className="map-container">
                <MapSVG
                    className="svg-map"
                    onClick={(e: React.MouseEvent<SVGElement>) => {
                        const target = e.target as SVGElement;
                        if (target.tagName === "path" && target.id) {
                            const regionId = target.id.replace("korean_map_svg__", "");
                            handleRegionToggle(regionId);
                        }
                    }}
                >

                </MapSVG>
            </div>

            {/* 지역 버튼 */}
            <div className="button-container">
                <ul>
                    {regions.map((region) => (
                        <li key={region.id} className="map-list-item">
                            <input
                                type="checkbox"
                                id={`region-${region.id}`}
                                value={region.id}
                                checked={selectedItems.includes(region.id)}
                                onChange={() => handleRegionToggle(region.id)}
                            />
                            <label htmlFor={`region-${region.id}`}>
                    <span
                        className={`map-list-txt ${
                            selectedItems.includes(region.id) ? "selected" : ""
                        }`}
                    >
                        {region.name}
                    </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>



            {/* 리스트 */}
            <div className='list'>
                <h2 className='list-head'>대한민국 구석구석,</h2>
                <div className='list-title'>
                    <div className='list-title-text'>
                        <span>인기</span>
                        <select>
                            <option>여행지</option>
                            <option>맛집</option>
                            <option>숙소</option>
                        </select>
                        <span>알려드릴게요!</span>
                    </div>
                    <div className='tooltip'>
                        <button className='tooltip-btn' onClick={handleTooltip}>
                            <i className='tooltip-icon'>i</i>
                        </button>
                        {hasTooltip && (
                            <div className='tooltip-wrap' ref={tooltipRef}>
                                <button type='button' className='btn-close' onClick={() => setHasTooltip(false)}>X
                                </button>
                                <div className='tooltip-cont'>
                                    한국관광데이터랩 Tmap 데이터 및
                                    대한민국 구석구석 사용자 활동 데이터를 기반으로
                                    지역별 인기 여행지와 맛집, 숙소 정보를 제공합니다.
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='list-card'>
                    {tourList.map((item, index) => (
                        <li className='list-card-item' key={index}>
                            <Link
                                href={{
                                    pathname: `/travel/regions/${index + 1}`,
                                    query: {
                                        title: item.title,
                                        locale: item.locale,
                                        tag: JSON.stringify(item.tag),
                                        image: item.image
                                    },
                                }}
                                className='list-card-item-link'>
                                <div className='img'>
                                    <img src={`/images/list_sample_${index + 1}.png`} alt={item.title}/>
                                </div>
                                <div className='info'>
                                    <div className='info-title'>{item.title}</div>
                                    <p className='info-locale'>{item.locale}</p>
                                    <ul className='info-tag'>
                                        {item.tag.map((tagItem, indexDepth) => (
                                            <li className='info-tag-list' key={indexDepth}>#{tagItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                            <button className={`btn-like ${likedItems[index] ? 'is-active' : ''}`}
                                    onClick={() => handleBtnLike(index)}>
                                {likedItems[index] ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor"
                                         className="size-6">
                                        <path
                                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
                                    </svg>
                                ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                          strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                </svg>)}
                            </button>
                        </li>
                    ))}
                </div>
                <div className='btn-area'>
                    <button className='btn-more'>
                        <span>더보기</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            </div>
            {/* EOD : 리스트 */}

            {/*<div className='title'>*/}
            {/*    현재 <strong>{selectedItems.join(', ')}</strong>에서 진행하는 주변 축제·행사는?*/}
            {/*</div>*/}

            {/* 슬라이더 */}
            <div className='card-slider'>
                <Swiper slidesPerView={1.9}
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            el: '.custom-pagination',
                            clickable: true,
                            bulletClass: 'custom-pagination-bullet', // 사용자 정의 클래스 지정
                            bulletActiveClass: 'custom-pagination-bullet-active', // 활성화 클래스 지정
                        }}
                        modules={[Pagination, Navigation]}>
                    {cardList.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='card'>
                                <div className='img'>
                                    <img src={`/images/card_sample_0${index + 1}.png`} alt={item.title}/>
                                </div>
                                <div className='info'>
                                    <div className='info-title'>{item.title}</div>
                                    <p className='info-locate'>{item.place}</p>
                                    <div className='info-content'>
                                        <div className='info-content-period'>
                                            <p className='tit'>기간</p>
                                            <div className='cont'>{item.period}</div>
                                        </div>
                                        <div className='info-content-place'>
                                            <p className='tit'>장소</p>
                                            <div className='cont'>{item.address}</div>
                                        </div>

                                    </div>
                                    <div className='info-btn'>
                                        <a href="" className='btn-fill'>바로가기</a>
                                        <a href="" className='btn-line'>길찾기</a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>


                <div className='page-btn'>
                    <div className='page-btn-inner'>
                        {/* 커스텀 내비게이션 버튼 */}
                        <div className="swiper-button-next custom-next">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </div>
                        <div className="swiper-button-prev custom-prev">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </div>

                        {/* 커스텀 페이지네이션 */}
                        <div className="swiper-pagination custom-pagination"></div>
                    </div>
                    <a href="" className='page-btn-more'>
                        <strong>축제 · 행사달력</strong>
                        <span>보러가기</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </a>
                </div>
            </div>
            {/* EOD : 슬라이더 */}
        </div>
    );
}



