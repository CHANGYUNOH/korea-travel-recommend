"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 로그인 로직을 여기에 구현합니다 (예: 이메일/비밀번호 검증)
        if (email === "user@example.com" && password === "password") {
            // 로그인 성공 시 홈 페이지로 리디렉션
            router.push("/");
        } else {
            // 로그인 실패 시 오류 메시지 설정
            setError("잘못된 이메일 또는 비밀번호입니다.");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full dark:bg-gray-800">
                <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
                    로그인
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
                            이메일
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 dark:text-gray-300">
                            비밀번호
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                        로그인
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        계정이 없으신가요?{" "}
                        <a href="/signup" className="text-blue-500 hover:text-blue-600">
                            회원가입
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
