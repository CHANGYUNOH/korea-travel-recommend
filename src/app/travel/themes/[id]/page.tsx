'use client';

import '@/styles/pages/theme.scss';
import {useSearchParams} from "next/navigation";

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

    return (
        <>
            <h1 className='themes-title'>{name}</h1>
            <div className='themes-detail'>
                <nav className='themes-detail-nav'>
                    <ul className='themes-detail-nav-wrap'>
                        {navList.map((item, index) => (
                            <li key={index} className='themes-detail-nav-list'>
                                <a className='themes-detail-nav-list-item'>
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
                                        <a className='cont-list-item'>
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
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='btn-area'>
                            <button className="btn-more">
                                <span>더보기</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}