'use client';
import Link from 'next/link';
import '@/styles/pages/regions.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useState} from "react";

const RegionDetailPage = ({ params }: { params: { id: string } }) => {

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

    // 각 아이템에 대해 좋아요 상태를 저장할 배열을 생성
    const [likedItems, setLikedItems] = useState(
        recommendList.map(() => false) // 초기값은 모두 false (좋아요 하지 않음)
    )

    const handleBtnLike = (index: number) => {
        // 해당 인덱스의 좋아요 상태를 토글
        setLikedItems((prevLikedItems) => prevLikedItems.map((liked, i) =>
            i === index ? !liked : liked // 현재 아이템만 상태를 변경
        ));

        // 좋아요 버튼을 클릭했을 때 alert 메시지 표시
        alert(`좋아요가 ${likedItems[index] ? '취소' : '추가'}되었습니다.`);
    }

    // 갤러리 리스트
    const galleryList = ['','','','',''];

    const [showMore, setShowMore] = useState(false);

    const handleBtnMore = () => {
        setShowMore(prev => !prev); // 상태 토글
    }

    return (
        <div className='region-detail'>
            <div className='title-area'>
                <div className='tit'>속초해수욕장</div>
                <div className='sub'>강원 속초시</div>
                <div className='title'>
                    <em>피서객들의 사랑을 한몸에 받는 속초해수욕장</em>
                </div>
            </div>
            <div className='top-area'>
                <ul className='top-area-left'>
                    <li>
                        <button className='btn-like'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                            </svg>
                            <span className='num'>75</span>
                        </button>
                    </li>
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
                        <button className='btn-bookmark'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className='btn-print'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className='btn-map'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button className='btn-share'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"/>
                            </svg>
                            <span className='num'>15</span>
                        </button>
                    </li>
                </ul>
            </div>
            <div className='cont-area'>
                <div className='gallery'>
                    <div className='top-area'>
                        <button className='btn-img'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5}
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                            </svg>
                            <span className='txt'>사진등록하기</span>
                        </button>
                    </div>
                    <div className='img-area'>
                        <Swiper>
                            {galleryList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Link href='/'>
                                        <img src={`/images/card_sample_0${index + 1}.png`} alt={item}/>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='detail-view'>
                        <div className='top-area'>
                            <div className='title'>상세정보</div>
                            <button className='btn-modify'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/>
                                </svg>
                                <span className='txt'>관광정보 수정요청</span>
                            </button>
                        </div>
                        <div className='cont-area'>
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
                            <li className='info-area-list'>
                                <span className='tit'>안내요원</span>
                                <span className='cont'>예약 신청 시 시각장애해설사 안내가능(청각이용)</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>점자홍보 및 점자표지판</span>
                                <span className='cont'>예약 신청 시 점자 안내도 제공</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>시각장애 기타상세</span>
                                <span className='cont'>시각장애인 해설사의 인원은 요일별로 상이</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>청각장애 기타상세</span>
                                <span className='cont'>청각장애인 안내사의 인원은 요일별로 상이</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>수화 안내</span>
                                <span className='cont'>예약 신청 시 청각장애인 해설사 안내기능</span>
                            </li>
                        </ul>
                        <div className='recommend-area'>
                            <div className='title'>‘여수 해상케이...’ 와(과) 유사한 여행지 추천👍</div>
                            <div className='cont'>
                                <ul className='cont-wrap'>
                                    {recommendList.map((item, index) => (
                                        <li className='cont-wrap-list' key={index}>
                                            <div className='img'
                                                 style={{backgroundImage: `url('/images/list_sample_${index + 1}.png')`}}>
                                                <div className='img-wrap'>
                                                    <div className='img-wrap-txt'>{item.title}</div>
                                                </div>
                                            </div>
                                            <button onClick={() => handleBtnLike(index)}
                                                    className={`btn-like ${likedItems[index] ? 'is-active' : ''}`}>
                                                {likedItems[index] ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         fill="currentColor" className="size-6">
                                                        <path
                                                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                                    </svg>
                                                )}
                                            </button>
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
};

export default RegionDetailPage;