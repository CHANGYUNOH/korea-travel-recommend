"use client"

import React, {useEffect} from "react";

export default function Main() {

    useEffect(() => {
        console.log("useEffect")
        const fetchData = async () => {
            const result = await fetch('/api/v1/sample');
            console.log(await result.json());
        };
        fetchData();
    }, []);

    return (
        <div className='container'>
            <main className="pt-20 mt-5">
                <section id="home" className="container mx-auto text-center">
                    <h1 className="text-5xl font-extrabold mb-4">
                        Welcome to <span className="text-blue-500">My Website</span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-5">
                        Build something amazing today.
                    </p>
                </section>
            </main>
        </div>
    )
}
