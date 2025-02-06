"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any; // window.kakao에 대한 타입을 any로 선언
  }
}

const KakaoMap = () => {
  useEffect(() => {
    // 위치 정보를 가져오는 함수
    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // 위치 정보를 사용하여 카카오 지도 초기화
            loadKakaoMap(latitude, longitude);
          },
          (error) => {
            console.error("위치를 가져올 수 없습니다.", error);
          }
        );
      } else {
        console.error("Geolocation을 지원하지 않는 브라우저입니다.");
      }
    };

    // 카카오 맵 로딩 함수
    const loadKakaoMap = (latitude: number, longitude: number) => {
      const script = document.createElement("script");
      const apiKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (!window.kakao || !window.kakao.maps) return;

        window.kakao.maps.load(() => {
          const container = document.getElementById("map") as HTMLElement;
          const options = {
            center: new window.kakao.maps.LatLng(latitude, longitude),
            level: 5, // 지도 확대 수준
          };

          const map = new window.kakao.maps.Map(container, options);

          // 내 위치에 마커 추가 (핀 만들기)
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(latitude, longitude), // 사용자 위치
            title: "내 위치",
          });
          marker.setMap(map);

          // 마커 클릭 시 인포윈도우 표시 (선택사항)
          const infowindow = new window.kakao.maps.InfoWindow({
            content: "<div>여기는 내 위치입니다.</div>", // 인포윈도우 내용
          });

          window.kakao.maps.event.addListener(marker, "click", () => {
            infowindow.open(map, marker);
          });
        });
      };
    };

    getCurrentLocation();
  }, []);

  return <div id="map" style={{ width: "500px", height: "500px" }} />;
};

export default KakaoMap;
