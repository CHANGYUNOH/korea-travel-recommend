'use client'; // 클라이언트에서 처리할 경우 사용

import React from 'react';
import styles from '@/styles/pages/dashboard.module.scss';

// 가상의 업무 리스트 (업무가 분류되어 있음)
const tasks = [
    { id: 1, title: "업무 1", description: "업무 1에 대한 설명", date: "2024-11-14", manager: "홍길동", notes: "긴급", category: "마케팅", status: "진행 중" },
    { id: 2, title: "업무 2", description: "업무 2에 대한 설명", date: "2024-11-15", manager: "김유진", notes: "진행 중", category: "개발", status: "대기" },
    { id: 3, title: "업무 3", description: "업무 3에 대한 설명", date: "2024-11-16", manager: "이정민", notes: "완료", category: "디자인", status: "완료" },
    { id: 4, title: "업무 4", description: "업무 4에 대한 설명", date: "2024-11-17", manager: "박상훈", notes: "대기", category: "마케팅", status: "진행 중" },
    { id: 5, title: "업무 5", description: "업무 5에 대한 설명", date: "2024-11-18", manager: "최수지", notes: "긴급", category: "디자인", status: "대기" },
];

export default function Dashboard() {
    // 카테고리별로 업무를 분류
    const categories = [...new Set(tasks.map(task => task.category))];

    // 상태별 색상 클래스
    const getStatusColor = (status: string) => {
        switch (status) {
            case '진행 중':
                return styles.inProgress;
            case '완료':
                return styles.completed;
            case '대기':
                return styles.pending;
            default:
                return '';
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>업무 대시보드</h1>
            </header>

            <div className={styles.dashboard}>
                {categories.map(category => (
                    <section key={category} className={styles.taskList}>
                        <h2 className={styles.sectionTitle}>{category} 업무</h2>
                        <div className={styles.taskCards}>
                            {tasks
                                .filter(task => task.category === category)
                                .map(task => (
                                    <div key={task.id} className={`${styles.card} ${getStatusColor(task.status)}`}>
                                        <h3 className={styles.cardTitle}>{task.title}</h3>
                                        <p className={styles.cardDescription}>{task.description}</p>
                                        <span className={styles.cardDate}>날짜: {task.date}</span>
                                        <div className={styles.cardDetails}>
                                            <span className={styles.cardManager}>담당자: {task.manager}</span>
                                            <span className={styles.cardNotes}>비고: {task.notes}</span>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
