
'use client';

import '@/styles/pages/theme.scss';
import React from "react";
import Link from 'next/link';

// 테마별 여행지
export default function Themes() {

    // 테마 이름
    const region = [
        {
            name: '걷기여행',
            id: 'leisure'
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

    return (
        <>
            <div className='themes'>
                <h1 className='themes-title'>여행의 시작은 테마 선택부터!</h1>
                <p className='themes-sub'>어떤 테마가 끌리시나요?</p>
                <ul className='themes-wrap'>
                    {region.map((item, index) => (
                        <li className={`themes-wrap-list ${item.id}`} key={index}>
                            <div className='themes-wrap-list-cover'>
                            <Link href={{
                                pathname: `/travel/themes/${item.id}`,
                                query: {
                                    name: item.name,
                                },
                            }} 
                             className='themes-wrap-list-item'>
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
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}