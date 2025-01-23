'use client';

import '@/styles/pages/nearby.scss';

const distance = ['10m이내', '100m', '500m', '1km', '5km', '10km', '20km'];

const tourType = ['전체', '여행지', '숙박', '쇼핑', '음식점점'];

const itemList = [
    {
        title: '봉은사'
    },
    {
        title: '해파랑길 3코스'
    },
    {
        title: '해파랑길 2코스'
    },
    {
        title: '해파랑길 1코스'
    }
]

// 근처 여행지 찾기
export default function Nearby() {
    return (
        <div className='nearby'>
            <h1 className="text-4xl font-bold mb-10 mt-10">근처 여행지 찾기</h1>
            <div className='search-area'>
                <dl>
                    <dt>거리반경</dt>
                    <dd>
                        {distance.map((item, index) => (
                            <div className='radio-list' key={index}>
                                <input type="radio" name="distance"/>
                                <label htmlFor="">
                                    <span>{item}</span>
                                </label>
                            </div>
                        ))}
                    </dd>
                </dl>
                <dl>
                    <dt>관광타입</dt>
                    <dd>
                    {tourType.map((item, index) => (
                        <div className='radio-list' key={index}>
                            <input type="radio" name="distance"/>
                            <label htmlFor="">
                                <span>{item}</span>
                            </label>
                        </div>
                    ))}
                    </dd>
                </dl>
            </div>
            <div className='nearby-cont'>
                <div className='nearby-cont-map'>
                    <img src="/images/img_map.png"/>
                </div>
                <div className='nearby-cont-list'>
                     <ul className='item'>
                        {itemList.map((item, index) => (
                            <li className='item-list' key={index}>
                            <div className='item-list-top'>
                                <img src="/images/card_sample_02.png"/>
                                <div className='cont'>
                                    <h2 className='title'>{item.title}</h2>
                                    <p className='sub'>내 위치로부터 10m</p>
                                </div>
                            </div>
                            <div className='item-list-content'>
                                <ul className='nearby-top'>
                                    <li className='nearby-top-list'>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="20" height="21" fill="url(#pattern0_1128_11096)"/>
                                        <defs>
                                        <pattern id="pattern0_1128_11096" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_1128_11096" transform="scale(0.05 0.047619)"/>
                                        </pattern>
                                        <image id="image0_1128_11096" width="20" height="21" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJDQkQ0MDEzNTk3QTExRURCQTdGRTc0MjkyRkMzRTBGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJDQkQ0MDE0NTk3QTExRURCQTdGRTc0MjkyRkMzRTBGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkNCRDQwMTE1OTdBMTFFREJBN0ZFNzQyOTJGQzNFMEYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkNCRDQwMTI1OTdBMTFFREJBN0ZFNzQyOTJGQzNFMEYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4teB0CAAADG0lEQVR42pxUTUiiYRAeRTQjOkeyGGUUdQmCiIT2HHuI/mgpCukQFKxth6BL2yE6BIKkERSxgV6WLpvQHiI6FRmJqbtFP0sR0e6l6JCGP1nTzJDfpmnL7sDD5zvOPDPvvDMDiAi5QGIkOAk/CQnCb8IXgjmXj+rJ8YWoVKr39PlcVFSk7+jogNLSUri8vASPxwP7+/ts4iB8xEyCHJm9JSS7u7sxHA7jc7m/v0e73Y4UkA0/vfDNQqYi/GhsbMRkMikk19fX6HK5cH19XSEeHR1l4yjhTVZCEi3BSvjOia+urorj+fk5FhcXo9FoxPz8fBwcHBT9zc0N6nQ6dvzKvmmEJAZCQKPRYF1dHSvEgWV8fBzr6+vlqtvb23LVq6sr+a+2thbVajXbB5iDudRkwJmtGAyGGp/PB8PDw6lHkW9hYSHc3t5CLBYDIgIKCnq9XnmDlpYWKCkpqaGf38hHx7oPnNnu7q5EDQQCkuHGxoacOZvq6mrMy8uT7CYmJkRPQaQEDocDg8EgMgdzMaG3ra1NKfbDwwOWlZVhX1+foovH4xLg6OhI0S0uLgrJxcWFnFtbW5nQy4Rxm82W1hpTU1Oo1Wrx4OAAswnXl0qE7e3tio45iCsmrTg7O5vmEI1Gsby8XB6Ds8sUi8UiJTg9PVV009PTUqqshCybm5uSJV+dy5DpODc3l2Y/NjaWmzA1Dc3NzfIQ/f39QrqwsCDngYGBFwmwjrk0mTO8tLQE1ItweHgINClArwhWqxX29vbA6/VCT08POJ3ONB9KACoqKv6McypDHi2+5vLyshI5kUhgZ2enZMbdcHZ2pjR9aix7e3vRZDIpV1Ze2e/34/z8fNaXPT4+xru7O+zq6pKgPOssZrMZq6qqcGRkhMnCSh+63W6cmZnBvwnXd2dnB6k0cj45OZEl8rwPZVIqKytxcnIS/0dCoVBqUni5AM9fsKCgANfW1v6ZjEeVZpnJQswlG5sKzttmhaLUUKtAQ0MDUAB4TSKRCGxtbckGpysz2Tvi+iXrq6mpKbUPhwg+tn96sdcQebIder4PHwUYAC7Jz3G6mwWjAAAAAElFTkSuQmCC"/>
                                        </defs>
                                        </svg>
                                    </li>
                                    <li className='nearby-top-list'>
                                        <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="24" height="18" fill="url(#pattern0_1128_11098)"/>
                                        <defs>
                                        <pattern id="pattern0_1128_11098" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_1128_11098" transform="scale(0.0416667 0.0555556)"/>
                                        </pattern>
                                        <image id="image0_1128_11098" width="24" height="18" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBBODFDNEExNThGNjExRURCMUM1Q0VCQ0FFNDBCMzhCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBBODFDNEEyNThGNjExRURCMUM1Q0VCQ0FFNDBCMzhCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEE4MUM0OUY1OEY2MTFFREIxQzVDRUJDQUU0MEIzOEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEE4MUM0QTA1OEY2MTFFREIxQzVDRUJDQUU0MEIzOEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70VKbDAAAB70lEQVR42pyVSyiEURTHDZMRCmkwsWBDqYlCZCVWSJMSycaGsvLIQhaIUgphYzMekeyEhFiIbFh5W0xSFDamhDzGGP9b/1u365vP49Rvpu+e851zz7nnns8S8jvJBFkgEYSCO3AKjsFnyD8lDQyDSxAIwg3oB46/OE4Ak8BHJwegF7hADsgFFaCPWQibR9DO7EylFtzzpVVQqGVUBWpAurJepgTaBHFGjsPAKI2uQbmiSwKLBuXZAqm0CWc5AzyXZNW5UC5QuQbiFZ0deIAfzIBKlmqcJbwFKYp9I/gARyBGLs7TuZuZqOJml9QZZF1KZyvaehP9bUh/Z9yRRTOMAm88i2Ayy+zs2voAg/SYHXg2jVpNbOppU2JwpktgwoqfQbADljUjP/+tJgGsmq36rks+iEN8Bk7NyAYewK5JALGpdxBroOuW2WczgEfrCCFDLEGHgYMG6qa0dXHZRqibkIvV7IgT9r2USLBH423QBlp48GLtXG1HSDRrL7soQt+RqN0FB5v60hizlJfslbuL05rikPo53q9vIjJ5IZ2akcgmD+QzqBQHS+Jj4Oaf5pGTN1Hs5Ap00bFNG4iiS6a5GTk6Mn47Ua28kR5t/njBk/Iszm0dFAdzZPkhkNAXgCLuLomjWXwH9jm7vGYOvgQYAFaEjCh1ofQVAAAAAElFTkSuQmCC"/>
                                        </defs>
                                        </svg>
                                        <span>9.5K</span>
                                    </li>
                                    <li className='nearby-top-list'>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.160156" y="0.230469" width="17" height="18" fill="url(#pattern0_1128_11102)"/>
                                        <defs>
                                        <pattern id="pattern0_1128_11102" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use href="#image0_1128_11102" transform="scale(0.0588235 0.0555556)"/>
                                        </pattern>
                                        <image id="image0_1128_11102" width="17" height="18" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjFiNjVhNzliNCwgMjAyMi8wNi8xMy0yMjowMTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg1OTA2NDEwNThGNzExRUQ4RTVGQTEyNzY0QjZDREVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg1OTA2NDExNThGNzExRUQ4RTVGQTEyNzY0QjZDREVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODU5MDY0MEU1OEY3MTFFRDhFNUZBMTI3NjRCNkNERUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODU5MDY0MEY1OEY3MTFFRDhFNUZBMTI3NjRCNkNERUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RZT6aAAAA+UlEQVR42qxUSw7CIBQsmG68Tdn0CnoDxcTEq3gOXWmjC+rKxHgHr6B30I274jyFppIW8DPJhBc+D95keExrncSAMcYxjMGhmTqAG5yvEkoSIkAJFBLpPM+1EEJTTHPPtcZGHyQdUkppi7IsbSIZm0TRC1zQi7BW8Ag5BDhoW0jT9BU0ap6Aa8OJmZuBd/DilkNxXY5HtDPdAS7BfnNPlmXvwgZEWzivpVtXhhRzq2fhE61NC9cCncLWokVCekSbh8S35fAO0W5G2BM4BXdex3aI1jP/5AhW/3Ds/lfHEq5Bx0b8Yul17DetwHUs+7ApjZymtKWm9BBgACq3bZ//A/igAAAAAElFTkSuQmCC"/>
                                        </defs>
                                        </svg>
                                    </li>
                                </ul>
                                <div className='detail-info'>
                                    <h3 className='title'>상세정보</h3>
                                    <p className='desc'>
                                        봉은사는 서울의 중심지인 강남구 삼성동에 자리 잡은 천년고찰이다. 794년 연화국사가 창건하였고 처음엔 견성사라고 하였다. 이후 1498년 성종의 계비 정현왕후가 성종의 능(선릉)동편에 있던 절을 크게 중창하고 절 이름을 성종의 계비 정현왕후가 성종의 능(선릉) 동편에 있던 이 절을 크게 중창하고 절 이름을 봉은사로 바꿨다.
                                    </p>
                                    <div className='btn-area'>
                                        <button className='btn-more'>
                                            <span className='txt'>자세히보기</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                        d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                        ))}
                     </ul>
                     <div className='btn-area'> 
                        <button className='btn-more'>
                            <span className='txt'>더보기</span>
                        </button>
                     </div>
                </div>
            </div>
        </div>
    );
}