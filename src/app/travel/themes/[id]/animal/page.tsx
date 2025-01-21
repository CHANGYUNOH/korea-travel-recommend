'use client';
import '@/styles/pages/regions.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from "react";
import {Navigation, Pagination} from "swiper/modules";
import { useSearchParams } from 'next/navigation';

export default function ThemeDetailPage() {

    const searchParams = useSearchParams(); // 리스트 페이지에서 데이터 전달 받음

    const title = searchParams.get('title'); // 타이틀
    const locale = searchParams.get('locale'); // 장소
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

    const [showInfo, setShowInfo] = useState(false);

    const handleBtnMore = () => {
        setShowMore(prev => !prev); // 상태 토글
    }

    const handleBtnInfo = () => {
        setShowInfo(prev => !prev); // 상태 토글
    }

    const handleBtnMap = () => {
        alert('추후 개발 예정입니다.')
    }

    const handleBtnShare = () => {
        alert('링크가 복사되었습니다..');
    }

    const [setTooltip, setSetTooltip] = useState(false);

    const handleTooltip = () => {
        setSetTooltip(!setTooltip);
    };

    return (
        <div className='region-detail'>
            <div className='title-area'>
                <div className='tit'>{title}</div>
                <div className='sub'>{locale}</div>
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
                        </ul>
                        <div className='warn-area'>
                            <div className='warn-area-top'>
                                <div className='title'>
                                    <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0001 9.98054C11.4021 9.98054 12.5791 10.9305 12.9116 12.215C13.3296 13.8255 13.2731 15.5905 15.1106 16.507C16.7416 17.062 17.3586 17.7595 17.3586 19.6295C17.3586 21.122 16.0816 22.7085 14.4351 22.9065C12.5941 23.183 11.1611 22.8215 9.99956 22.1595C8.83806 22.8215 7.40456 23.1835 5.56606 22.9065C3.91856 22.7085 2.64206 21.1165 2.64206 19.6295C2.64206 17.7995 3.30056 17.025 4.92856 16.4945C6.93206 15.471 6.66306 13.677 7.11006 12.136C7.29383 11.5125 7.67483 10.9654 8.1959 10.5767C8.71697 10.1881 9.35002 9.9789 10.0001 9.98054ZM19.1786 8.86854C18.6821 8.43704 16.6556 10.1215 16.0181 10.9545C15.6306 11.399 15.3896 12.01 15.3896 12.684C15.3896 14.0395 16.3596 15.1385 17.5531 15.1385C18.4611 15.1385 19.2381 14.507 19.5596 13.609C20.1841 11.994 20.2186 9.77154 19.1786 8.86854ZM0.820564 8.86854C-0.217936 9.77154 -0.184436 11.994 0.441064 13.609C0.762564 14.507 1.53906 15.1385 2.44656 15.1385C3.64106 15.1385 4.61006 14.0395 4.61006 12.684C4.61006 12.01 4.36956 11.399 3.98206 10.9545C3.34406 10.1215 1.31806 8.43704 0.820564 8.86854ZM12.6676 0.015041C17.7116 0.871041 17.3576 9.36604 13.3191 8.68154C12.1541 8.48354 11.2891 7.42254 11.1576 6.15504C11.0241 4.86604 10.7236 -0.313959 12.6676 0.015041ZM7.33256 0.015041C9.27706 -0.314459 8.97606 4.86554 8.84256 6.15454C8.71106 7.42254 7.84706 8.48304 6.68206 8.68104C2.64256 9.36654 2.28906 0.871041 7.33256 0.015041Z" fill="black"/>
                                    </svg>
                                    <span>반려동물 여행정보 보기</span>
                                </div>
                                <button onClick={handleBtnInfo} className='btn-more'>
                                    {showInfo ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                                        </svg>
                                    ): (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M12 4.5v15m7.5-7.5h-15"/>
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {showInfo ? (
                            <ul className='warn-area-wrap'>
                                <li className='warn-area-list'>※ 반려동물 동반 여행정보는 현지 사정에 따라 변동될 수 있으므로 반드시 방문 전 문의 부탁드립니다.</li>
                                <li className='warn-area-list'>※ <span onClick={handleTooltip}>여행펫티켓</span>을 준수해주시고 안전 사고에 유의해주세요.</li>
                                {setTooltip && (
                                    <div className="desc">
                                        <ul className="desc-wrap">
                                        <li className="desc-list">
                                            <div className="desc-list-title">
                                            <img />
                                            <span>해파랑길</span>
                                            </div>
                                            <div className="desc-list-cont">
                                            <p className="sub">
                                                부산에서부터 강원도 고성에 이르는 동해안을 따라 걷는 길
                                            </p>
                                            <div className="text">
                                                '해파랑길'의 의미는 동해의 상징인 동해의 상징인
                                                '떠오르는 해'와 푸르른 바다색인 '파랑', '~와 함께'라는
                                                조사 '랑'을 조합한 합성어이며 떠오르는 해와 푸른 바다를
                                                바라보며 파도소리를 벗삼아 함께 걷는 길"이라는 뜻입니다.
                                            </div>
                                            </div>
                                        </li>
                                        <li className="desc-list">
                                            <div className="desc-list-title">
                                            <img />
                                            <span className="txt">남파랑길</span>
                                            </div>
                                            <div className="desc-list-cont">
                                            <p className="sub">부남쪽의 쪽빛 바다와 함께 걷는 길</p>
                                            <div className="text">
                                                남파랑길'은 '남쪽의 쪽빛 바다와 함께 걷는 길'이라는
                                                뜻으로,부산 오륙도 해맞이 공원에서 전남 해남
                                                땅끝마을까지 남해안을 따라 연결된 총 90개 코스,
                                                1,470km의 걷기 여행이다. 남해의 수려한 해안경관과
                                                대도시의 화려함, 농촌어촌마을의 소박함을 모두 체험할 수
                                                있는 길이다.
                                            </div>
                                            </div>
                                        </li>
                                        <li className="desc-list">
                                            <div className="desc-list-title">
                                            <img />
                                            <span className="txt">서해랑길</span>
                                            </div>
                                            <div className="desc-list-cont">
                                            <p className="sub">서쪽의 바다와 함께 걷는길</p>
                                            <div className="text">
                                                서해랑길은 전남 해남 땅끝탑에서 인천 강화를 연결하는
                                                109개 코스, 1,800km의 걷기여행길로, 서쪽(西)의
                                                바다(파도)와 함께(랑) 걷는 길을 의미합니다. 서해랑길 을
                                                따라 천천히 걷다보면 유네스코 세계유산으로 지정된 드넓은
                                                갯벌과 황홀한 일몰, 종교와 문물교류의 역사를 만나게
                                                됩니다.
                                            </div>
                                            </div>
                                        </li>
                                        <li className="desc-list">
                                            <div className="desc-list-title">
                                            <img />
                                            <span className="txt">물소리길</span>
                                            </div>
                                            <div className="desc-list-cont">
                                            <p className="sub">남한강과 북한강을 아우르는 걷는 길</p>
                                            <div className="text">
                                                남한강과 북한강의 맑은 물소리와 자연의 소리를 느낄 수
                                                있는 걷는 여행길이다. 산과 강과 마을길을 걸으며 아늑한
                                                옛 고향의 따스함처럼 여유로운 삶의 행복을 느낄 수 있는
                                                길이다
                                            </div>
                                            </div>
                                        </li>
                                        </ul>
                                        <button className="btn-close">닫기</button>
                                    </div>
                                )}
                            </ul>
                            ) : ''}
                        </div>
                        <ul className='info-area'>
                           <li className='info-area-list'>
                                <span className='tit'>동반가능동물</span>
                                <span className='cont'>입마개 착용, 목줄 착용</span>
                           </li>  
                           <li className='info-area-list'>
                                <span className='tit'>동반시 필요사항</span>
                                <span className='cont'>제한없음</span>
                           </li>
                           <li className='info-area-list'>
                                <span className='tit'>기타 동반 정보</span>
                                <span className='cont'>
                                목줄 착용 및 이동장 이용시 동반입장 가능<br/>
                                맹견은 입마개 필수<br/>
                                입장전 매표소에서 동의서 작성
                                </span>
                           </li>
                           <li className='info-area-list'>
                                <span className='tit'>관련 구비 시설</span>
                                <span className='cont'>입장전 동의서 작성</span>
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