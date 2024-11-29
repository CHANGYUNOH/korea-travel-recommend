import Link from 'next/link';

export default function RegionDetail() {
    return (
        <div className='region-detail'>
            <div className='title-area'>
                <div className='tit'>속초해수욕장</div>
                <div className='sub'>강원 속초시</div>
                <div className='title'>피서들의 사랑을 한몸에 받는 속초해수욕장</div>
                <div className='top-area'>
                    <button className='btn-like'>
                        <i className='icon'/>
                        <span className='num'>75</span>
                    </button>
                    <div className='btn-view'>
                        <i className='icon'/>
                        <span className='num'>12.7K</span>
                    </div>
                    <ul className='right-area'>
                        <li className='right-area-list'>
                            <button className='btn-bookmark'>
                                <i className='icon'/>
                            </button>
                        </li>
                        <li className='right-area-list'>
                            <button className='btn-print'>
                                <i className='icon'/>
                            </button>
                        </li>
                        <li className='right-area-list'>
                            <button className='btn-map'>
                                <i className='icon'/>
                            </button>
                        </li>
                        <li className='right-area-list'>
                            <button className='btn-share'>
                                <i className='icon'/>
                                <span className='num'>15</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='cont-area'>
                <ul className='tab'>
                    <li className='tab-list'>
                        <Link href="/" className='tab-list-item'>
                            <span className='txt'>사진보기</span>
                        </Link>
                    </li>
                    <li className='tab-list'>
                        <Link href="/" className='tab-list-item'>
                            <span className='txt'>상세정보</span>
                        </Link>
                    </li>
                    <li className='tab-list'>
                        <Link href="/" className='tab-list-item'>
                            <span className='txt'>여행톡</span>
                        </Link>
                    </li>
                    <li className='tab-list'>
                        <Link href="/" className='tab-list-item'>
                            <span className='txt'>추천여행</span>
                        </Link>
                    </li>
                </ul>
                <div className='gallery'>
                    <div className='top-area'>
                        <button className='btn-line'>
                            <i className='icon' />
                            <span className='txt'>사진등록하기</span>
                        </button>
                    </div>
                    <div className='img-area'>
                        <Link href='/'>
                            <img />
                        </Link>
                    </div>
                    <div className='detail-view'>
                        <div className='top-area'>
                            <div className='title'>상세정보</div>
                            <button className='btn-modify'>
                                <i className='icon' />
                                <span className='txt'>관광정보 수정요청</span>
                            </button>
                        </div>
                        <div className='cont-area'>
                            <div className='text'>
                                1976년 처음 개장한 속초해수욕장은 국내 대표적인 해수욕장 가운데 하나다. 속초 시내와 가깝고 고속버스터미널이 도보 거리에 있어 교통이 편리한 것이 장점이다. 속초해수욕장은 바닷물이 맑고 깨끗한 데다 수심이 얕고 경사가 완만해 매년 여름철이면 전국에서 모여든 피서객들로 북적 해진다. 특히 성수기인 7~8월에는 너른 해변이 발 디딜 틈도 없이 사람들로 가득 찬다. 해수욕장 주변은 음식점과 편의 시설이 잘 갖춰져 있다. 해변 뒤편에는 소나무 숲이 우거져 있으며 작은 공원과 산책로도 조성되어 있다. 휴가철이 지난 후에도 해수욕장에는 관광객들의 발길이 끊이지 않는다. 모래사장 곳곳에 설치된 조형물들이 계절에 관계없이 다채로운 볼거리를 선사하기 때문이다. 속초를 형상화한 ‘ㅅㅊ’ 이니셜과 세계 각국의 방향을 표시한 커다란 나침반, 생동감 있는 돌고래 조각 등이 눈길을 사로잡는다. 푸른 바다를 배경으로 한 대형 액자 프레임과 하늘을 향해 뻗은 천국의 계단은 이곳에서 가장 인기 있는 포토존이다. 매년 이곳에서는 관광객들에게 더욱 즐거운 추억을 선물하기 위해 버스킹, 여름 해변축제, 속초 수제맥주 축제를 즐길 수 있다. 여행시기에 맞추어 방문한다면 밴드 공연, 음악회 등의 공연행사를 즐길 수 있다.
                            </div>
                            <button className='btn-more'>
                                <span className='txt'>내용 더보기</span>
                                <i className='icon' />
                            </button>
                        </div>
                        <div className='map-area'>
                            지도영역
                        </div>
                        <ul className='info-area'>
                            <li className='info-area-list'>
                                <span className='tit'>문의 및 안내</span>
                                <span className='cont'>02-3218-4800</span>
                            </li>
                            <li className='info-area-list'>
                                <span className='tit'>홈페이지</span>
                                <span className='cont'>http://www.bongeunsa.org</span>
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
                    </div>
                </div>
            </div>

        </div>
    );
}


/*const RegionDetailPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;

    return (
        <div className=''>
            <h1>{id} 지역 상세 페이지</h1>
            <div className='title-area'>
                <div className='tit'>속초해수욕장</div>
                <div className='sub'>강원 속초시</div>
                <div className='title'>피서들의 사랑을 한몸에 받는 속초해수욕장</div>
                <div className='top-area'>
                    <button className='btn-like'>
                        <i className='icon'/>
                        <span className='num'>75</span>
                    </button>
                    <div className='btn-view'>
                        <i className='icon'/>
                        <span className='num'>12.7K</span>
                    </div>
                    <ul className='right-area'>
                        <li className='right-area-list'>
                            <button className='btn-bookmark'>
                                <i className='icon'/>
                            </button>
                        </li>
                        <li className='right-area-list'>
                            <button className='btn-print'>
                                <i className='icon'/>
                            </button>
                        </li>
                        <li className='right-area-list'>
                            <button className='btn-map'>
                                <i className='icon'/>
                            </button>
                        </li>
                        <li className='right-area-list'>
                            <button className='btn-share'>
                                <i className='icon'/>
                                <span className='num'>15</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='cont-area'>
                <ul className='tab'>
                    <li className='tab-list'>
                        <Link href="/" className='tab-list-item'>
                            <span className='txt'>사진보기</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default RegionDetailPage;*/
