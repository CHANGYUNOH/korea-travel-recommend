'use client';

import '@/styles/pages/travel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';

// 지역별 여행지
export default function Regions() {

    const region = ['반려동물 동반 여행','친환경 관광','캠핑장','레저여행']

    const swiperList = ['속초', '합천', '용산', '여수', '담양', '고성', '서산']

    return (
        <>
            {/* 테마별 여행지 */}
            <div className='area'>
                <Swiper
                    slidesPerView={4}
                        spaceBetween={30}
                    className="region"
                >
                    {region.map((item, index) => (
                        <SwiperSlide key={index}>
                            <li className="region-list">
                                <a href="#" className="region-list-item">
                                    <img />
                                    <span>{item}</span>
                                </a>
                            </li>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* EOD : 테마별 여행지 */}

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
                        <button className='tooltip-btn'>
                            <i className='tooltip-icon'>i</i>
                        </button>
                        <div className='tooltip-wrap'>
                            <button type='button' className='btn-close'>X</button>
                            <div className='tooltip-cont'>
                                한국관광데이터랩 Tmap 데이터 및
                                대한민국 구석구석 사용자 활동 데이터를 기반으로
                                지역별 인기 여행지와 맛집, 숙소 정보를 제공합니다.
                            </div>
                        </div>
                    </div>

                </div>
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
                                        <img/>
                                    </div>
                                    <div className='info'>
                                        <div className='info-title'>고성 통일전망타워</div>
                                        <p className='info-locale'>{item}</p>
                                        <ul className='info-tag'>
                                            <li className='info-tag-list'>#역사공부</li>
                                            <li className='info-tag-list'>#전쟁역사</li>
                                        </ul>
                                    </div>
                                </a>
                                <button className='btn-like'>
                                    <i className='icon'/>
                                </button>
                            </li>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* EOD : 리스트 */}

            {/* 배너 */}
            <div className='banner'>
                배너
            </div>
            {/* EOD : 배너 */}

            {/* 일정 */}
            <div className='schedule'>
                일정
            </div>
            {/* EOD : 일정 */}

            {/* 슬라이더 */}
            <div className='slider'>
                슬라이더
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