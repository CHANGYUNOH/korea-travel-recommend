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
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
  },
  {
    label: "개최중",
    title: "안성 동막골 빙어축제",
    locale: "충남 서산시",
    date: "2024.12.31 ~ 2025.01.20",
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
          <li className={`tab-list ${tabShow === index ? "is-active" : ""}`} key={index}>
            <button className="tab-list-item" onClick={() => handleTabShow(index)}>
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
                  <Link href="" className="cont-list-item">
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
            축제 달력
        </>
      )}
    </div>
  );
}
