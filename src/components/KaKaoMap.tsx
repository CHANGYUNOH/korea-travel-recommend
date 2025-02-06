"use client";

import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";

const KakaoMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false); // 지도 로딩 상태
  const kakaoApiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY;

  useEffect(() => {
    if (!kakaoApiKey) {
      console.error("API Key가 설정되지 않았습니다.");
      return;
    }

    // 카카오 지도 SDK 로드
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoApiKey}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      // SDK 로드 후, 지도 준비
      window.kakao.maps.load(() => {
        console.log("Kakao 지도 SDK 로드됨:", window.kakao);
        setMapLoaded(true); // SDK 로드 후 mapLoaded 상태 업데이트
      });
    };

    document.head.appendChild(script);
  }, [kakaoApiKey]);

  if (!mapLoaded) {
    return <p>지도 로딩 중...</p>; // 지도 로딩 전 메시지
  }

  return (
    <Map
      center={{ lat: 37.5665, lng: 126.978 }} // 서울 시청 좌표
      style={{ width: "700px", height: "400px" }}
      level={3} // 확대 레벨
      onCreate={(map) => console.log("지도 객체 생성됨:", map)}
    >
      <MapMarker position={{ lat: 37.5665, lng: 126.978 }}>
        <div style={{ padding: "5px", color: "#000" }}>서울 시청</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
