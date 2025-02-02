"use client";

import "@/styles/pages/festival.scss";
import Link from "next/link";
import { useState } from "react";

const tabList = ["지역 축제", "축제 달력"];

const contList = [
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_1.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_2.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_3.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_4.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_5.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_6.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_7.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
    image: '/images/list_sample_8.png',
    desc: '전국 각지 농수산물이 모이는 서울시 송파구 가락몰에서 전국 각지의 빵집을 모아 서울 최초로 전국 빵 축제를 개최한다. 5/10(금)~5/12(일), 3일간 약 25여 개의 전국 유명 빵집들과 가락몰에서 유통되는 신선한 과일을 한자리에서 맛볼 수 있다. DJ 선곡 음악을 빵, 케이크, 구움과자 등과 신선한 과일 주스와 함께 즐길 수 있다. 가족과 연인, 친구들과 함께 가락몰에서 전국 각지에서 모인 다양한 빵도 먹고, 포토존에서 사진도 찍고, 여러 가지 체험을 할 수 있다.'
  }
];

export default function FestivalPage() {

  const [tabShow, setTabShow] = useState(0);

  const handleTabShow = (index: number) => {
    setTabShow(index);
  };

  return (
    <div className="nearby">
      <ul className="tab">
        {tabList.map((item, index) => (
          <li key={index}>
            <button className={`tab-list-item ${tabShow === index ? 'is-active' : ''}`} onClick={() => handleTabShow(index)}>
              {item}
            </button>
          </li>
        ))}
      </ul>

      {tabShow === 0 && (
        <>
          <div className="search-box">
            <input type="text" placeholder="검색어를 입력하세요." />
          </div>

          <div className="search-area">
            <dl>
              <dt>지역</dt>
              <dd>
                <select>
                  <option>도/시 전체</option>
                </select>
              </dd>
              <dd>
                <select>
                  <option>시/군 전체</option>
                </select>
              </dd>
            </dl>

            <dl>
              <dt>시기</dt>
              <dd>
                <div className="date-picker">날짜를 선택하세요.</div>
              </dd>
            </dl>

            <div className="btn-area">
              <div className="btn-wrap">
                <button className="btn-search">검색</button>
                <button className="btn-reset">초기화</button>
              </div>
            </div>
          </div>

          <div className="cont">
            <ul className="cont-wrap">
              {contList.map((item, index) => (
                <li className="cont-list" key={index}>
                  <Link href={{
                          pathname:`/travel/festivals/${index}`,
                          query: {
                              title: item.title,
                              locale: item.locale,
                              desc: item.desc,
                              image: item.image
                          }
                      }} className="cont-list-item">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(/images/list_sample_${index + 1}.png)`,
                      }}
                    ></div>
                    <div className="info">
                      <div className="info-label">{item.label}</div>
                      <div className="info-tit">{item.title}</div>
                      <div className="info-sub">{item.locale}</div>
                      <div className="info-date">{item.date}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pagination">
              <div className="pagination-wrap">
                <div className="pagination-list">
                  <div className="pagination-list-item">left</div>
                  <div className="pagination-list-item">1</div>
                  <div className="pagination-list-item">2</div>
                  <div className="pagination-list-item">3</div>
                  <div className="pagination-list-item">4</div>
                  <div className="pagination-list-item">5</div>
                  <div className="pagination-list-item">right</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tabShow === 1 && (
        <>
          <div className="search-area">
            <dl>
              <dt>지역</dt>
              <dd>
                <select>
                  <option>도/시 전체</option>
                </select>
              </dd>
              <dd>
                <select>
                  <option>시/군 전체</option>
                </select>
              </dd>
            </dl>
          </div>
          <div className="cont">
            <ul className="cont-wrap">
              {contList.map((item, index) => (
                <li className="cont-list" key={index}>
                  <Link href={{
                          pathname:`/travel/festivals/${index}`,
                          query: {
                              title: item.title,
                              locale: item.locale,
                              desc: item.desc,
                              image: item.image
                          }
                      }} className="cont-list-item">
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(/images/list_sample_${index + 1}.png)`,
                      }}
                    ></div>
                    <div className="info">
                      <div className="info-label">{item.label}</div>
                      <div className="info-tit">{item.title}</div>
                      <div className="info-sub">{item.locale}</div>
                      <div className="info-date">{item.date}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pagination">
              <div className="pagination-wrap">
                <div className="pagination-list">
                  <div className="pagination-list-item">left</div>
                  <div className="pagination-list-item">1</div>
                  <div className="pagination-list-item">2</div>
                  <div className="pagination-list-item">3</div>
                  <div className="pagination-list-item">4</div>
                  <div className="pagination-list-item">5</div>
                  <div className="pagination-list-item">right</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
