'use client';

// 테마별 여행지

export default function Themes() {

    // 테마 이름
    const region = ['레저여행', '반려동물 동반 여행', '친환경 관광', '캠핑장']

    return (
        <>
            <div className='themes'>
                 <ul className='themes-wrap'>
                    <li className='themes-wrap-list'>
                        {region.map((item, index) => (
                            <a className='themes-wrap-list-item' key={index}>
                                <p className='title'>{item}</p>
                                <div className='img'>
                                     
                                </div>
                            </a>
                        ))}
                    </li>
                 </ul>
            </div>
        </>
    );
}