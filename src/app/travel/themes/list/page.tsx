import '@/styles/pages/theme.scss';

const detailList = [
    {
        title: '해인사(합천)',
        sub: '경남 합천군'
    },
    {
        title: '간월암(서산)',
        sub: '충남 서산시'
    },
    {
        title: '속초 외옹치 바다향기로',
        sub: '강원 속초시'
    },
    {
        title: '죽녹원',
        sub: '전남 담양군'
    },
    {
        title: '여수 해상케이블카',
        sub: '전남 여수시'
    },
    {
        title: '국립중앙박물관',
        sub: '서울 용산구'
    },
    {
        title: '고성 통일전망타워',
        sub: '강원 고성군'
    },
    {
        title: '속초해수욕장',
        sub: '강원 속초시'
    }
]

export default function ThemesDetailPage() {
    return (
        <>
            <div className='themes'>
                <div className='themes-detail'>
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
                                    <div className='select-default'>
                                        <select>
                                            <option>시/군 전체</option>
                                        </select>
                                    </div>
                                </dd>
                            </dl>
                        </div>
                        <div className='content-area'>
                            <p className='title'>총 <strong>6</strong>건</p>
                            <div className='cont'>
                                <div className='cont-wrap col-4'>
                                    {detailList.map((item, index) => (
                                        <div className='cont-list'>
                                        <a href="javascript:void(0)" className='cont-list-item'>
                                            <div className='img' style={{backgroundImage: `url(/images/list_sample_${index + 1}.png)`}}/>
                                            <div className='info'>
                                                <div className='info-tit'>{ item.title }</div>
                                                <span className='info-sub'>{ item.sub }</span>
                                            </div>
                                        </a>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div className='pagination'>
                                <div className='pagination-wrap'>
                                    <div className='pagination-list'>
                                        <div className='pagination-list-item'>left</div>
                                        <div className='pagination-list-item'>1</div> 
                                        <div className='pagination-list-item'>2</div> 
                                        <div className='pagination-list-item'>3</div> 
                                        <div className='pagination-list-item'>4</div> 
                                        <div className='pagination-list-item'>5</div>
                                        <div className='pagination-list-item'>right</div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}