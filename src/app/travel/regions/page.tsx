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
import MapSVG from '@/assets/svg/korean_map_02.svg';

export default function Regions() {

    const regions = [
        { id: "All" , name : "전국"},
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

    const handleRegionToggle = (regionId: string) => {
        setSelectedItems((prev) => {
            let updatedItems: string[] = [];
            if (regionId === "All") {
                // "전국" 클릭 시 모든 지역 선택/해제
                const allSelected = prev.includes("All"); // 현재 전국이 선택된 상태인지 확인
                updatedItems = allSelected ? [] : regions.map((region) => region.id);
            } else {
                // 개별 지역 선택/해제
                const isSelected = prev.includes(regionId);
                updatedItems = isSelected
                    ? prev.filter((id) => id !== regionId) // 선택 해제
                    : [...prev, regionId]; // 선택 추가

                // "전국"을 제외한 모든 지역 목록
                const regionIdsWithoutAll = regions
                    .map((region) => region.id)
                    .filter((id) => id !== "All");

                // "전국" 상태 자동 업데이트
                const allRegionsSelected = regionIdsWithoutAll.every(id => updatedItems.includes(id));
                if (allRegionsSelected && !updatedItems.includes("All")) {
                    updatedItems.push("All"); // 모든 지역이 선택되었으면 "전국" 추가
                } else if (!allRegionsSelected) {
                    updatedItems = updatedItems.filter((id) => id !== "All"); // 하나라도 선택 해제되면 "전국" 제거
                }
            }

            // SVG 업데이트
            regions.forEach((region) => {
                const targetPath = document.querySelector(`#korean_map_svg__${region.id}`);
                if (targetPath) {
                    (targetPath as SVGElement).setAttribute(
                        "fill",
                        updatedItems.includes(region.id) ? region.color || "#fff" : "#fff"
                    );
                }
            });

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
            <div className="map-container">
                {/* 지도 */}
                <div className="map-area">
                <MapSVG
    className="map-container-svg"
    onClick={(e: React.MouseEvent<SVGElement>) => {
        const target = e.target as SVGElement;
        if (target.tagName === "path" && target.id) {
            // 클릭된 path 요소의 id 가져오기
            const regionId = target.id.replace("korean_map_svg__", "");

            // 선택된 지역인지 확인
            const isSelected = selectedItems.includes(regionId);

            // 색상 변경 (기본 색상은 #fff, 선택되면 해당 지역의 색상 또는 파란색)
            const newColor = isSelected ? "#fff" : (regions.find(region => region.id === regionId)?.color || "#007bff");
            target.setAttribute("fill", newColor);

            // 선택 상태 업데이트
            handleRegionToggle(regionId);
        }
    }}
/>

                    </div>


                {/* 버튼 리스트 */}
                <div className="map-container-button-list">
                    <ul>
                        {regions.map((region) => (
                            <li key={region.id} className="map-container-button-list-item">
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
                                    <img src="/svg/heart_fill.svg" className={"size-6"} alt="좋아요 선택됨" />
                                ) : (<img src="/svg/heart.svg" className={"size-6"}  alt="좋아요 선택안됨"/>)}
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
                            <img src="/svg/custom_right.svg" className={"size-6"} alt="다음"/>
                        </div>
                        <div className="swiper-button-prev custom-prev">
                            <img src="/svg/custom_left.svg" className={"size-6"} alt="이전"/>
                        </div>

                        {/* 커스텀 페이지네이션 */}
                        <div className="swiper-pagination custom-pagination"></div>
                    </div>
                    <a href="" className='page-btn-more'>
                        <strong>축제 · 행사달력</strong>
                        <span>보러가기</span>
                        <img src="/svg/chevron_right.svg" className={"size-6"} alt="좋아요 선택됨"/>
                    </a>
                </div>
            </div>
            {/* EOD : 슬라이더 */}
        </div>
    );
}



