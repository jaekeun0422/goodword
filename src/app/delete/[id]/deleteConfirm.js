'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

export default function DeleteConfirm({ params }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const id = params.id;

    const handleDelete = async () => {
        setIsDeleting(true);

        try {
            const resp = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/delete/${id}`,
                { method: "DELETE" }
            );

            if (resp.ok) {
                router.push('/?deleted=true');
            } else {
                setError('삭제에 실패했습니다.');
            }
        } catch (err) {
            setError('오류가 발생했습니다: ' + err.message);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen bg-gray-50">
            <div className="flex flex-col gap-8 row-start-2 items-center">
                <div className="text-center p-8 border border-yellow-300 bg-yellow-50 shadow-lg rounded-lg max-w-md">
                    <h2 className="text-gray-800 text-xl font-bold mb-4">
                        정말 삭제하시겠습니까?
                    </h2>
                    <p className="text-gray-600 mb-2">
                        ID No. {id}
                    </p>
                    <p className="text-sm text-red-600">
                        이 작업은 되돌릴 수 없습니다.
                    </p>
                </div>

                {error && (
                    <div className="text-red-600 font-semibold">
                        {error}
                    </div>
                )}

                <div className="flex gap-4">
                    <button
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="bg-red-600 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-red-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
                    >
                        {isDeleting ? '삭제 중...' : '삭제 확인'}
                    </button>

                    <Link
                        href="/"
                        className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
                    >
                        취소
                    </Link>
                </div>
            </div>
        </div>
    );
}