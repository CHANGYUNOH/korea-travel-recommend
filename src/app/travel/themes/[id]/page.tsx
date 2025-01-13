'use client';

import '@/styles/pages/theme.scss';
import {useSearchParams} from "next/navigation";
import Link from 'next/link';
import React, {useState} from "react";

export default function ThemesDetailPage() {

    const searchParams = useSearchParams(); // 리스트 페이지에서 데이터 전달 받음

    const name = searchParams.get('name'); // 타이틀

    const navList = [
        {
            name: '해파랑길'
        },
        {
            name: '남파랑길'
        },
        {
            name: '서해랑길'
        },
        {
            name: 'DMZ 평화의 길'
        }
    ]

    // 테마 이름
    const region = [
        {
            name: '걷기여행',
            id: 'leisure',
        },
        {
            name: '반려동물 동반 여행',
            id: 'animal'
        },
        {
            name: '친환경 관광',
            id: 'natural'
        },
        {
            name: '캠핑장',
            id: 'camping'
        }
    ]

    const distance = ['전체', '5km 미만', '5~10km 미만', '10km 초과']

    const time = ['전체', '2시간 미만', '2~4시간', '4시간 초과']

    const difficulty = ['전체', '2시간 미만', '2~4시간', '4시간 초과']

    const detailList = [
        {
            title: '해파랑길 1코스',
            locale: '부산 남구',
            info: [
                {
                    distance: '16.9km',
                    time: '6시간 30분',
                    difficulty: '보통'
                }
            ]
        },
        {
            title: '해파랑길 2코스',
            locale: '부산 남구',
            info: [
                {
                    distance: '16.9km',
                    time: '6시간 30분',
                    difficulty: '보통'
                }
            ]
        },
        {
            title: '해파랑길 3코스',
            locale: '부산 남구',
            info: [
                {
                    distance: '16.9km',
                    time: '6시간 30분',
                    difficulty: '보통'
                }
            ]
        },
        {
            title: '해파랑길 4코스',
            locale: '부산 남구',
            info: [
                {
                    distance: '16.9km',
                    time: '6시간 30분',
                    difficulty: '보통'
                }
            ]
        },
        {
            title: '해파랑길 5코스',
            locale: '부산 남구',
            info: [
                {
                    distance: '16.9km',
                    time: '6시간 30분',
                    difficulty: '보통'
                }
            ]
        },
        {
            title: '해파랑길 6코스',
            locale: '부산 남구',
            info: [
                {
                    distance: '16.9km',
                    time: '6시간 30분',
                    difficulty: '보통'
                }
            ]
        }
    ]

    const [setTooltip, setSetTooltip] = useState(false);
    
    const handleTooltip = () => {
        setSetTooltip(!setTooltip);
    }

    return (
        <>
            <div className='themes'>
            <h1 className='themes-title'>{name}</h1>
            <ul className='themes-wrap'>
                    {region.map((item, index) => (
                        <li className={`themes-wrap-list ${item.id}`} key={index}>
                            <Link href={{
                                pathname: `/travel/themes/${item.id}`,
                                query: {
                                    name: item.name
                                },
                            }} className='themes-wrap-list-item'>
                                <p className='title'>{item.name}</p>
                                <div className='img'>
                                    {item.id === 'animal' ? (<div className='svg'>
                                        <img src="/svg/animal.svg" alt="animal" />
                                    </div>) : null}
                                    {item.id === 'natural' ? (
                                        <div className='svg'>
                                            <img src="/svg/natural.svg" alt="natural" />
                                        </div>
                                    ) : null}
                                    {item.id === 'camping' ? (
                                        <div className='svg'>
                                            <img src="/svg/camping.svg" alt="camping" />
                                        </div>
                                    ) : null}
                                    {item.id === 'leisure' ? (
                                        <div className='svg'>
                                            <img src="/svg/leisure.svg" alt="leisure" />
                                        </div>
                                    ) : null}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            <div className='themes-info'>
                    <span className='txt'>코리아둘레길, 해파랑길, 서해랑길, DMZ 평화의 길 등 우리나라의 걷기길을 소개합니다.</span>
                    <button className='btn-info' onClick={handleTooltip}>
                        <i className='icon'>?</i>
                        { setTooltip && (
                            <div className='desc'>
                                <ul className='desc-wrap'>
                                    <li className='desc-list'>
                                        <div className='desc-list-title'>
                                            <img src="" alt=""/>
                                            <span>해파랑길</span>
                                        </div>
                                        <div className='desc-list-cont'>
                                            <p className='sub'>부산에서부터 강원도 고성에 이르는 동해안을 따라 걷는 길</p>
                                            <div className='text'>
                                                '해파랑길'의 의미는 동해의 상징인 동해의 상징인 '떠오르는 해'와 푸르른 바다색인 '파랑', '~와 함께'라는
                                                조사 '랑'을 조합한 합성어이며 떠오르는 해와 푸른 바다를 바라보며 파도소리를 벗삼아 함께 걷는 길"이라는 뜻입니다.
                                            </div>
                                        </div>
                                    </li>
                                    <li className='desc-list'>
                                        <div className='desc-list-title'>
                                            <img src="" alt=""/>
                                            <span className='txt'>남파랑길</span>
                                        </div>
                                        <div className='desc-list-cont'>
                                            <p className='sub'>부남쪽의 쪽빛 바다와 함께 걷는 길</p>
                                            <div className='text'>
                                                남파랑길'은 '남쪽의 쪽빛 바다와 함께 걷는 길'이라는 뜻으로,부산 오륙도 해맞이 공원에서 전남 해남 땅끝마을까지
                                                남해안을 따라 연결된 총 90개 코스, 1,470km의 걷기 여행이다. 남해의 수려한 해안경관과 대도시의 화려함,
                                                농촌어촌마을의 소박함을 모두 체험할 수 있는 길이다.
                                            </div>
                                        </div>
                                    </li>
                                    <li className='desc-list'>
                                        <div className='desc-list-title'>
                                            <img src="" alt=""/>
                                            <span className='txt'>서해랑길</span>
                                        </div>
                                        <div className='desc-list-cont'>
                                            <p className='sub'>서쪽의 바다와 함께 걷는길</p>
                                            <div className='text'>
                                                서해랑길은 전남 해남 땅끝탑에서 인천 강화를 연결하는 109개 코스, 1,800km의 걷기여행길로, 서쪽(西)의 바다(파도)와
                                                함께(랑) 걷는 길을 의미합니다. 서해랑길 을 따라 천천히 걷다보면 유네스코 세계유산으로 지정된 드넓은 갯벌과 황홀한 일몰,
                                                종교와 문물교류의 역사를 만나게 됩니다.
                                            </div>
                                        </div>
                                    </li>
                                    <li className='desc-list'>
                                        <div className='desc-list-title'>
                                            <img src="" alt=""/>
                                            <span className='txt'>물소리길</span>
                                        </div>
                                        <div className='desc-list-cont'>
                                            <p className='sub'>남한강과 북한강을 아우르는 걷는 길</p>
                                            <div className='text'>
                                                남한강과 북한강의 맑은 물소리와 자연의 소리를 느낄 수 있는 걷는 여행길이다. 산과 강과 마을길을 걸으며 아늑한 옛 고향의
                                                따스함처럼 여유로운 삶의 행복을 느낄 수 있는 길이다
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <button className='btn-close'>닫기</button>
                            </div>
                        )}
                    </button>
                </div>
            <div className='themes-detail'>
                <nav className='themes-detail-nav'>
                    <ul className='themes-detail-nav-wrap'>
                        {navList.map((item, index) => (
                            <li key={index} className='themes-detail-nav-list'>
                                <a href="javascript:void(0)" className='themes-detail-nav-list-item'>
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className='themes-detail-cont'>
                    <div className='search-area'>
                        <dl>
                            <dt>지역</dt>
                            <dd>
                                <div className='select-default'>
                                    <select>
                                        <option>도/시 전체</option>
                                    </select>
                                </div>
                            </dd>
                        </dl>
                        <dl className='radio-default'>
                            <dt>거리</dt>
                            <dd>
                                {distance.map((item, index) => (
                                    <div className='radio-list' key={index}>
                                        <input type="radio" name='distance'/>
                                        <label htmlFor={`distance-${index}`}>
                                            <span>{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </dd>
                        </dl>
                        <dl className='radio-default'>
                            <dt>소요시간</dt>
                            <dd>
                                {time.map((item, index) => (
                                    <div className='radio-list' key={index}>
                                        <input type="radio" name='time'/>
                                        <label htmlFor={`time-${index}`}>
                                            <span>{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </dd>
                        </dl>
                        <dl className='radio-default'>
                            <dt>난이도</dt>
                            <dd>
                                {difficulty.map((item, index) => (
                                    <div className='radio-list' key={index}>
                                        <input type="radio" name='difficulty'/>
                                        <label htmlFor={`difficulty-${index}`}>
                                            <span>{item}</span>
                                        </label>
                                    </div>
                                ))}
                            </dd>
                        </dl>
                    </div>
                    <div className='content-area'>
                        <p className='title'>총 <strong>{detailList.length}</strong>건</p>
                        <div className='cont'>
                            <ul className='cont-wrap'>
                                
                                {detailList.map((item, index) => (
                                    <li className='cont-list' key={index}>
                                        
                                        <Link href="/" className='cont-list-item'>
                                            <div className='img'
                                                 style={{backgroundImage: `url(/images/list_sample_${index + 1}.png)`}}>
                                            </div>
                                            <div className='info'>
                                                <p className='info-tit'>{item.title}</p>
                                                <span className='info-sub'>{item.locale}</span>
                                                {item.info.map((depth, index) => (
                                                    <ul className='info-wrap' key={index}>
                                                        <li className='info-wrap-list'>{depth.distance}</li>
                                                        <li className='info-wrap-list'>{depth.time}</li>
                                                        <li className='info-wrap-list'>{depth.difficulty}</li>
                                                    </ul>
                                                ))}
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}