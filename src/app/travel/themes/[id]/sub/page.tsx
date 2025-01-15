'use client';

import '@/styles/pages/theme.scss';
import {useSearchParams} from "next/navigation";

export default function ThemesDetailPage() {

    const searchParams = useSearchParams(); // 리스트 페이지에서 데이터 전달 받음

    const title = searchParams.get('title'); // title

    const locale = searchParams.get('locale'); // locale

    const distance = searchParams.get('distance'); // distance

    const time = searchParams.get('time'); // time

    const difficulty = searchParams.get('difficulty'); // difficulty

    return (
        <>
            <div className="themes detail">
                 <div className='themes-head'>
                    <div className='themes-head-top'>{locale}</div>
                    <div className='themes-head-title'>{title}</div>
                    <div className='themes-head-sub'>길이 16.9km. 소요시간 6시간 30분. 난이도 보통</div>
                 </div>
                 <ul className='themes-top'>
                    <li className='themes-top-list'>
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
                    <li className='themes-top-list'>
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
                    <li className='themes-top-list'>
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
                 <ul className='themes-cont'>
                    <li className='themes-cont-list'>
                        <div className='tit'>한줄소개(crssummary)</div>
                        <p className='desc'>
                            해파랑길 첫 번째 코스로 부산시 남구 용호동과 해운대를 잇는 해안길
                            오륙도 해맞이공원에서 출발해 광안리해변과 APEC해변을 지나 해운대에 이르는 구간
                            해식절벽과 동해안의 자연경관은 물론 화려하고 번화한 광안리, 해운대 관광을 겸할 수 있음
                        </p>
                    </li>
                    <li className='themes-cont-list'>
                         <div className='tit'>코스개요(crsContents)</div>
                         <p className='desc'>
                            해파랑길 전체 770㎞ 중에서 제1선발인 부산은 의외성을 갖는 멋진 길의 변화가 걷는 이들을 시시때때로 감동시킨다. 시작점에 있는 해파랑길 종합안내소에서 이어지는 ‘이기대길’ 구간부터 경탄과 감탄을 자아내는 해식절벽의 비경으로 아름답다. 이기대 해안의 절벽길은 기존 해안순찰로를 정비하여 위험한 곳은 나무데크와 울타리로 안전하게 바꾸어 산책로 수준으로 조성한 명품길이다. 광안리해변은 광안대교의 웅장한 위용과 고운 백사장이 장도를 시작한 나그네의 마음을 쿵쿵 뛰게 한다. 해운대는 신라 최치원이 속세를 버리고 가야산으로 들던 길에 빼어난 경치에 반해 자신의 자(字)인 해운(海雲)을 바위에 새겨 넣은 후 해운대라 불리게 되었다. 지금도 동백섬 바위에 최치원이 새겼다는 해운대 글씨가 또렷하다.
                         </p>   
                    </li>
                    <li className='themes-cont-list'>
                        <div className='tit'>관광포인트(crsTourInfo)</div>
                        <p className='desc'>
                            - 용호동 앞바다의 6개의 바위섬으로 부산의 활력을 상징하는 오륙도<br />- 장산봉 동쪽 자라락에 위치한 곳으로 공룡발자국을 확인할 수 있는 이기대공원<br />- 남천동과 센텀시티를 잇는 7.42km의 광안대교. 야간 경관조경이 일품<br />- 해운대 명칭의 유래인 '해운 최치원' 선생이 직접 바위에 새겼다는 석각이 있는 동백섬
                        </p>
                    </li>
                    <li className='themes-cont-list'>
                        <div className='tit'>여행자정보(travelInfo)</div>
                        <p className='desc'>
                            - 유명 관광지와 번화한 구간을 지나므로 곳곳에 편의점과 화장실 위치<br/>- 해파랑길 전체 50코스의 시작점 오륙도에 해파랑길 안내소 위치<br/>- 광안리의 밤거리와 야경이 유명함으로 밤시간대 코스로 계획하는 것이 좋음 <br/><br/>*해파랑길 스탬프함 위치<br/>부산시 남구 오륙도로 137 부근(해파랑길 관광안내소 옆)
                        </p>
                    </li>
                 </ul>
            </div>
        </>
    )
}