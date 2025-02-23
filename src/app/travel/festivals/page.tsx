"use client";

import "@/styles/pages/festival.scss";
import Link from "next/link";
import { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

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

  const [value, onChange] = useState<Value>(new Date());

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
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs" aria-label="Pagination">
                  <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Previous</span>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">...</span>
                  <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                  <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
                  <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                    <span className="sr-only">Next</span>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </a>
                </nav>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tabShow === 1 && (
        <>
          <div className="calendar">
          <Calendar onChange={onChange} value={value} />
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
