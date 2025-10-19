<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
'use client'
import { useRouter } from "next/navigation";
import { useState } from 'react';
import {Control} from "@/app/control";

export function Logon() {
    const [logno, setLogno] = useState('');
    const [goNext, setGoNext] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); // submit 이벤트가 발생했을 때 페이지 리로드 방지
        const logon = e.target.logno.value;
        console.log(logno);
        if (logon !== "1004") {
            alert("허용된 번호를 입력하세요");
            setLogno(""); // 내용 clear
            router.refresh();
            router.push("/"); //홈으로
        } else {
            setGoNext(true);
        }

        /* 나중에 ID/PW table에서 찾을 때 사용
        let url = "";
        // category 상태의 값이 비어있지 않은지 직접 확인합니다.
        if (category && category.trim() !== '') {
            const params = new URLSearchParams({ category: category.trim() });
            url = `${process.env.NEXT_PUBLIC_API_URL}/api/findCategory1?${params.toString()}`;
        } else {
            url = `${process.env.NEXT_PUBLIC_API_URL}/api/getAll`;
        }

        fetch(url, { method: "GET" })
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result); // 응답 객체를 json 형태로 변환
                setTopics(result);
                //router.refresh(); // 있으면 결과가 표시되지 않음
            });
         */
    };
// input field에서 아래를 삭제
// [box-shadow:inset_0_0_0_1000px_#fff] dark:[box-shadow:inset_0_0_0_1000px_rgba(31,41,55,0.95)] [-webkit-text-fill-color:inherit]
// 아래는 추가
// bg-white dark:bg-gray-800
    return(
        <>
        <div className="flex flex-col items-center gap-4 w-full">
            {/* 스타일이 개선된 검색 폼 */}
            <form onSubmit={handleSubmit} className="group relative flex items-center w-[350px] rounded-full shadow-md border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 overflow-hidden">
                <input
                    type="text"
                    name="logno"
                    placeholder="0000"
                    value={logno || ''}
                    onChange={e => setLogno(e.target.value)}
                    className="peer w-full h-full bg-transparent pl-5 pr-2 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-yellow-300 placeholder-blue-500 dark:placeholder-gray-400 focus:outline-none "
                />
                <button type="submit" className="flex-shrink-0 p-2 mr-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 z-10">
                    {/* 돋보기 아이콘 SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </form>
        </div>
        {goNext && <Control />}
        </>
    );
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
<<<<<<< HEAD
'use client'
import { useRouter } from "next/navigation";
import { useState } from 'react';
import {Control} from "@/app/control";

export function Logon() {
    const [logno, setLogno] = useState('');
    const [goNext, setGoNext] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); // submit 이벤트가 발생했을 때 페이지 리로드 방지
        const logon = e.target.logno.value;
        console.log(logno);
        if (logon !== "1004") {
            alert("허용된 번호를 입력하세요");
            setLogno(""); // 내용 clear
            router.refresh();
            router.push("/"); //홈으로
        } else {
            setGoNext(true);
        }

        /* 나중에 ID/PW table에서 찾을 때 사용
        let url = "";
        // category 상태의 값이 비어있지 않은지 직접 확인합니다.
        if (category && category.trim() !== '') {
            const params = new URLSearchParams({ category: category.trim() });
            url = `${process.env.NEXT_PUBLIC_API_URL}/api/findCategory1?${params.toString()}`;
        } else {
            url = `${process.env.NEXT_PUBLIC_API_URL}/api/getAll`;
        }

        fetch(url, { method: "GET" })
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result); // 응답 객체를 json 형태로 변환
                setTopics(result);
                //router.refresh(); // 있으면 결과가 표시되지 않음
            });
         */
    };
// input field에서 아래를 삭제
// [box-shadow:inset_0_0_0_1000px_#fff] dark:[box-shadow:inset_0_0_0_1000px_rgba(31,41,55,0.95)] [-webkit-text-fill-color:inherit]
// 아래는 추가
// bg-white dark:bg-gray-800
    return(
        <>
        <div className="flex flex-col items-center gap-4 w-full">
            {/* 스타일이 개선된 검색 폼 */}
            <form onSubmit={handleSubmit} className="group relative flex items-center w-[350px] rounded-full shadow-md border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 overflow-hidden">
                <input
                    type="text"
                    name="logno"
                    placeholder="0000"
                    value={logno || ''}
                    onChange={e => setLogno(e.target.value)}
                    className="peer w-full h-full bg-transparent pl-5 pr-2 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-yellow-300 placeholder-blue-500 dark:placeholder-gray-400 focus:outline-none "
                />
                <button type="submit" className="flex-shrink-0 p-2 mr-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 z-10">
                    {/* 돋보기 아이콘 SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </form>
        </div>
        {goNext && <Control />}
        </>
    );
=======
'use client'
import { useRouter } from "next/navigation";
import { useState } from 'react';
import {Control} from "@/app/control";

export function Logon() {
    const [logno, setLogno] = useState('');
    const [goNext, setGoNext] = useState(false);
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault(); // submit 이벤트가 발생했을 때 페이지 리로드 방지
        const logon = e.target.logno.value;
        console.log(logno);
        if (logon !== "1004") {
            alert("허용된 번호를 입력하세요");
            setLogno(""); // 내용 clear
            router.refresh();
            router.push("/"); //홈으로
        } else {
            setGoNext(true);
        }

        /* 나중에 ID/PW table에서 찾을 때 사용
        let url = "";
        // category 상태의 값이 비어있지 않은지 직접 확인합니다.
        if (category && category.trim() !== '') {
            const params = new URLSearchParams({ category: category.trim() });
            url = `${process.env.NEXT_PUBLIC_API_URL}/api/findCategory1?${params.toString()}`;
        } else {
            url = `${process.env.NEXT_PUBLIC_API_URL}/api/getAll`;
        }

        fetch(url, { method: "GET" })
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result); // 응답 객체를 json 형태로 변환
                setTopics(result);
                //router.refresh(); // 있으면 결과가 표시되지 않음
            });
         */
    };
// input field에서 아래를 삭제
// [box-shadow:inset_0_0_0_1000px_#fff] dark:[box-shadow:inset_0_0_0_1000px_rgba(31,41,55,0.95)] [-webkit-text-fill-color:inherit]
// 아래는 추가
// bg-white dark:bg-gray-800
    return(
        <>
        <div className="flex flex-col items-center gap-4 w-full">
            {/* 스타일이 개선된 검색 폼 */}
            <form onSubmit={handleSubmit} className="group relative flex items-center w-[350px] rounded-full shadow-md border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 overflow-hidden">
                <input
                    type="text"
                    name="logno"
                    placeholder="0000"
                    value={logno || ''}
                    onChange={e => setLogno(e.target.value)}
                    className="peer w-full h-full bg-transparent pl-5 pr-2 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-yellow-300 placeholder-blue-500 dark:placeholder-gray-400 focus:outline-none "
                />
                <button type="submit" className="flex-shrink-0 p-2 mr-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 z-10">
                    {/* 돋보기 아이콘 SVG */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </form>
        </div>
        {goNext && <Control />}
        </>
    );
>>>>>>> afa3554ad93ba18f396aa873c9ebb2ad705c9b4f
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}