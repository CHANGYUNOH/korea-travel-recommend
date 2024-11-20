"use client";

import { useParams } from "next/navigation";

export default function SubPage() {
    const { id } = useParams<{ id: string }>(); // URL에서 동적으로 'id' 값을 추출하고, id가 문자열임을 보장

    // id가 없거나 잘못된 id가 전달된 경우 처리
    if (!id) {
        return (
            <main className="pt-20 mt-25">
                <section className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-10 mt-10">잘못된 페이지</h1>
                    <p>올바른 페이지 ID를 입력해주세요.</p>
                </section>
            </main>
        );
    }

    // 페이지 콘텐츠를 id에 맞게 처리
    const pages: Record<string, { title: string, content: string }> = {
        "1": { title: "지역별 여행지", content: "서울, 부산, 제주" },
        "2": { title: "테마별 여행지", content: "자연, 역사, 해변" },
        "3": { title: "근처 여행지 찾기", content: "검색 기능" },
        "4": { title: "지역 축제", content: "봄, 여름, 가을, 겨울" },
    };

    // pages[id]가 없는 경우 기본값 처리
    const page = pages[id] || { title: "페이지 없음", content: "존재하지 않는 페이지입니다." };

    return (
        <main className="pt-20 mt-25">
            <section className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-bold mb-10 mt-10">{page.title}</h1>
                <p>{page.content}</p>
            </section>
        </main>
    );
}
