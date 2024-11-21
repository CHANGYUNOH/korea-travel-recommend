import '@/styles/travel.scss';

// 지역별 여행지
export default function Regions() {

    const region = ['반려동물 동반 여행','친환경 관광','캠핑장','레저여행']

    return (
        <>
            {/* 테마별 여행지 */}
            <div className='regions'>
                <h1 className="text-4xl font-bold mb-10 mt-10">지역별 여행지</h1>
                <ul className='region'>
                    {region.map((item, index) => (
                        <li key={index} className='region-list'>
                            <a href='javascript:void(0)' className='region-list-item'>
                                <img/>
                                <span>{item}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {/* EOD : 테마별 여행지 */}

            {/* 리스트 */}
            <div className='list'>
                리스트
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