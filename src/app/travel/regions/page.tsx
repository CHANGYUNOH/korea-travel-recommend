'use client';
import '@/styles/pages/travel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import {useEffect, useState, useRef} from "react";

// 지역별 여행지
export default function Regions() {

    // 지역별 여행지 이름
    const locate = ['전국', '서울', '인천', '대전', '대구', '광주', '부산', '울산', '경기', '강원', '세종', '제주', '충북', '충남', '경북', '경남', '전북', '전남']

    // 라디오 버튼에서 선택된 값을 저장할 상태
    const [selectedLocation, setSelectedLocation] = useState('');

    // 라디오 버튼 변경 처리 함수
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedLocation(event.target.value);
    };

    // 테마 이름
    const region = ['반려동물 동반 여행', '친환경 관광', '캠핑장', '레저여행']

    // 여행지 리스트
    const swiperList = [
        {
            title: '고성 통일전망타워',
            locale: '강원 고성군',
            tag: ['역사공부', '전쟁역사']
        },
        {
            title: '해인사(합천)',
            locale: '경남 합천군',
            tag: ['휴식하기좋은곳', '전통사찰']
        },
        {
            title: '죽녹원',
            locale: '전남 담양군',
            tag: ['2024_여행가는달과함께하는_발도장여행지', '반려동물동반여행지']
        },
        {
            title: '속초해수욕장',
            locale: '강원 속초시',
            tag: ['일출일몰명소', '속초해변']
        },
        {
            title: '여수 해상케이블카',
            locale: '전남 여수시',
            tag: ['2024_여행가는달과함께하는_발도장여행지', '반려동물동반여행지']
        },
        {
            title: '간월암(서산)',
            locale: '충남 서산시',
            tag: ['2024_여행가는달과함께하는_발도장여행지', '충청권']
        },
        {
            title: '국립중앙박물관',
            locale: '서울 용산구',
            tag: ['2024_여행가는달과함께하는_발도장여행지', 'RM']
        },
        {
            title: '속초 외옹치 바다향기로',
            locale: '강원 속초시',
            tag: ['반려동물동반여행지', '해안산책']
        }
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
        swiperList.map(() => false) // 초기값은 모두 false (좋아요 하지 않음)
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

            {/* 지도 */}
            <div className='title'>
                지도로 찾아보는 <strong>지역별 여행지</strong>
            </div>
            <div className='map'>
                <div className='map-view'>
                    <div className='map-view-all'>
                        <ul className='map-section'>
                            {locate.map((item, index) => (
                                <li className='map-section-item' key={index}>
                                    <input
                                        type="radio"
                                        id={String(index)}
                                        name={item}
                                        value={item}
                                        checked={selectedLocation === item}
                                        onChange={handleRadioChange} />
                                    <label htmlFor={String(index)}>
                                        <img src={`/images/map_${index + 1}.png`} className={`map-${index + 1}`} alt={item}/>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <ul className='map-list'>
                    {locate.map((item, index) => (
                        <li className='map-list-item' key={index}>
                            <input
                                type="radio"
                                id={String(index)}
                                name={item}
                                value={item}
                                checked={selectedLocation === item}
                                onChange={handleRadioChange}
                            />
                            <label htmlFor={String(index)}>
                                <span className='map-list-txt'>{item}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            {/* 지도 */}

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
                <div className='list-nationwide'>
                    <Swiper slidesPerView={4}
                            grid={{
                                rows: 2, // 그리드 행(Row) 수
                                fill: "row" // 슬라이드 채우기 방식 (row 또는 column)
                            }}
                            spaceBetween={20}
                            modules={[Grid, Pagination]}
                            pagination={{
                                type: "fraction",
                            }}
                            className='list-card'>
                        {swiperList.map((item, index) => (
                            <SwiperSlide key={index}>
                                <li className='list-card-item'>
                                    <a href="" className='list-card-item-link'>
                                        <div className='img'>
                                            <img src={`/images/list_sample_0${index + 1}.png`} alt={item.title} />
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
                                    </a>
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <button className='btn-more'>
                    <a href="">
                        <span>더 많은 <strong>여행지</strong> 보러가기</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </a>
                </button>
            </div>
            {/* EOD : 리스트 */}

            <div className='title'>
                현재 <strong>{selectedLocation}</strong>에서 진행하는 주변 축제·행사는?
            </div>

            {/* 슬라이더 */}
            <div className='card-slider'>
                <Swiper slidesPerView={2.5}
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

            {/* 우리 지역 이야기 */}
            <div className='story'>
                우리 지역 이야기
            </div>
            {/* EOD : 우리 지역 이야기 */}
        </>
    );
}