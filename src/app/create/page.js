'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {useState} from "react";

export default function Create() {
    const router = useRouter();
    const [category, setCategory] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <form 
                className="w-full max-w-2xl bg-white p-8 border border-gray-200 shadow-lg rounded-xl" 
                onSubmit={async (e) => {
                    e.preventDefault();
                    setCategory(e.target.category.value);
                    setSubject(e.target.subject.value);
                    setContent(e.target.content.value);
                    if ((category === '' && category.trim() === '')
                        || (subject === '' && subject.trim() === '')
                        || (content === '' && content.trim() === '')) {
                        alert("카테고리, 제목, 내용 전부 다 작성해주세요");
                        return;
                    }
                    const options = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ category, subject, content, hit: 1 })
                    };
                    try {
                        const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `goodword/register`, options);
                        if (resp.ok) {
                            console.log("Post created successfully!");
                            e.target.reset(); // 폼의 모든 필드를 초기화합니다.
                            alert("좋은 글이 성공적으로 등록되었습니다!");
                        } else {
                            console.error("Failed to create post");
                            alert("글 등록에 실패했습니다.");
                        }
                    } catch (error) {
                        console.error("An error occurred:", error);
                        alert("오류가 발생했습니다. 다시 시도해주세요.");
                    }
            }}>
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">좋은 글 작성</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        name="category"
                        placeholder="카테고리 (예: 건강, 노후, 경제, 인생, 관계)"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-800"
                    />
                </div>

                <div className="mb-4">
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="제목을 입력하세요" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-800" 
                    />
                </div>
                
                <div className="mb-6">
                    <textarea 
                        name="content" 
                        placeholder="내용을 입력하세요" 
                        rows="10"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-800"
                    ></textarea>
                </div>
                
                <div className="text-center">
                    <input 
                        type="submit" 
                        value="글 등록"
                        className="bg-blue-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out cursor-pointer"
                    />
                </div>
            </form>
            <div className="mt-8">
                <Link href="/" className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out">
                    홈 화면
                </Link>
            </div>
        </div>
    );
}