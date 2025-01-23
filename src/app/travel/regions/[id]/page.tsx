'use client';
import '@/styles/pages/regions.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";
import {Navigation, Pagination} from "swiper/modules";
import { useSearchParams } from 'next/navigation';

export default function RegionDetailPage() {

    const searchParams = useSearchParams(); // 리스트 페이지에서 데이터 전달 받음

    const title = searchParams.get('title'); // 타이틀
    const locale = searchParams.get('locale'); // 장소
    const tag = JSON.parse(searchParams.get('tag') || '[]'); // 태그
    const image = searchParams.get('image'); // 장소

    // 추천 리스트
    const recommendList = [
        {
            title: '퍼블교'
        },
        {
            title: '뚜벅이로 가뿐하게 즐기는 낭만도시 여수 여행 코스'
        },
        {
            title: '대천해수욕장'
        },
        {
            title: '갓바위 문화타운'
        },
        {
            title: '봉선사(경기)'
        },
        {
            title: '보은 법주사[유네스코 세계유산]'
        }
    ]

    const [showMore, setShowMore] = useState(false);

    const handleBtnMore = () => {
        setShowMore(prev => !prev); // 상태 토글
    }

    const handleBtnMap = () => {
        alert('추후 개발 예정입니다.')
    }

    const handleBtnShare = () => {
        alert('링크가 복사되었습니다..');

    }

    return (
        <div className='region-detail'>
            <div className='title-area'>
                <div className='tit'>{title}</div>
                <div className='sub'>{locale}</div>
                <div className='title'>
                    <em>{tag}</em>
                </div>
            </div>
            <div className='top-area'>
                <ul className='top-area-left'>
                    <li>
                        <div className='btn-view'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                            </svg>
                            <span className='num'>12.7K</span>
                        </div>
                    </li>
                </ul>
                <ul className='top-area-right'>
                    <li>
                        <button className='btn-map' onClick={handleBtnMap}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className='btn-share' onClick={handleBtnShare}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"/>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
            <div className='cont-area'>
                <div className='gallery'>
                    <div className='img-area'>
                        <Swiper navigation={{
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
                            <SwiperSlide>
                                <img src={image ?? undefined} alt={image ?? ''}/>
                            </SwiperSlide>
                        </Swiper>
                        <div className='page-btn'>
                            <div className='page-btn-inner'>
                                {/* 커스텀 내비게이션 버튼 */}
                                <div className="swiper-button-next custom-next">
                                </div>
                                <div className="swiper-button-prev custom-prev">
                                </div>
                            </div>
                        </div>
                        {/* 커스텀 페이지네이션 */}
                        <div className="swiper-pagination custom-pagination"/>
                    </div>
                    <div className='detail-view'>
                        <div className='top-area'>
                            <div className='tit'>상세정보</div>
                        </div>
                        <div className='cont-area'>a
                            <div className={`text ${showMore ? 'is-active' : ''}`}>
                                1976년 처음 개장한 속초해수욕장은 국내 대표적인 해수욕장 가운데 하나다. 속초 시내와 가깝고 고속버스터미널이 도보 거리에 있어 교통이 편리한 것이
                                장점이다. 속초해수욕장은 바닷물이 맑고 깨끗한 데다 수심이 얕고 경사가 완만해 매년 여름철이면 전국에서 모여든 피서객들로 북적 해진다. 특히 성수기인
                                7~8월에는 너른 해변이 발 디딜 틈도 없이 사람들로 가득 찬다. 해수욕장 주변은 음식점과 편의 시설이 잘 갖춰져 있다. 해변 뒤편에는 소나무 숲이
                                우거져
                                있으며 작은 공원과 산책로도 조성되어 있다. 휴가철이 지난 후에도 해수욕장에는 관광객들의 발길이 끊이지 않는다. 모래사장 곳곳에 설치된 조형물들이
                                계절에
                                관계없이 다채로운 볼거리를 선사하기 때문이다. 속초를 형상화한 ‘ㅅㅊ’ 이니셜과 세계 각국의 방향을 표시한 커다란 나침반, 생동감 있는 돌고래 조각
                                등이
                                눈길을 사로잡는다. 푸른 바다를 배경으로 한 대형 액자 프레임과 하늘을 향해 뻗은 천국의 계단은 이곳에서 가장 인기 있는 포토존이다. 매년 이곳에서는
                                관광객들에게 더욱 즐거운 추억을 선물하기 위해 버스킹, 여름 해변축제, 속초 수제맥주 축제를 즐길 수 있다. 여행시기에 맞추어 방문한다면 밴드 공연,
                                음악회
                                등의 공연행사를 즐길 수 있다.
                            </div>
                            <div className='btn-area'>
                                <button className='btn-more' onClick={handleBtnMore}>
                                    <span className='txt'>{showMore ? '내용 닫기' : '내용 더보기'}</span>
                                    {showMore ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 4.5v15m7.5-7.5h-15"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <ul className='info-area'>
                            <li className='info-area-list'>
                                <span className='tit'>문의 및 안내</span>
                                <span className='cont'>02-3218-4800</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>홈페이지</span>
                                <span className='cont'>https://www.bongeunsa.org</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>주소</span>
                                <span className='cont'>서울특별시 강남구 봉은사로 531</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>이용시간</span>
                                <span className='cont'>05:00~22:00</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>휴일</span>
                                <span className='cont'>연중무휴</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>주차</span>
                                <span className='cont'>있음</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>체험 안내</span>
                                <span className='cont'>탬플 스테이 / 불교대학 / 경전학교</span>
                            </li>
                        </ul>
                        <div className='recommend-area'>
                            <div className='title'>‘{title}’ 와(과) 유사한 여행지 추천👍</div>
                            <div className='cont'>
                                <ul className='cont-wrap'>
                                    {recommendList.map((item, index) => (
                                        <li className='cont-wrap-list' key={index}>
                                            <div className='img'
                                                 style={{backgroundImage: `url('/images/list_sample_${index + 1}.png')`}}>
                                                <div className='img-wrap'>
                                                    <span className='img-wrap-txt'>{item.title}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}