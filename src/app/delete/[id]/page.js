<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Link from "next/link";

export const runtime = 'edge';

export default async function Delete({params}) {
    const awaitedParams = await params;
    const id = awaitedParams.id;
    console.log("delete parameter(id) = "+id);
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/delete/${id}`, {method: "POST"});
        if (resp.ok) {
            console.log(resp);
        } else {
            // 에러 처리: 데이터가 없을 때
            return (
                <>
                    <h2>Not found ID No. {awaitedParams.id}</h2>
                </>
            );
        }
        console.log("Delete successful:", resp);
        return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-[32px] row-start-2 items-center">
                    <div className="text-center p-8 border shadow-lg rounded-lg">
                        <div className="flex justify-center space-x-4 text-red-600">
                            <h2>좋은 글 ID No. {awaitedParams.id}(이)가 삭제되었습니다.</h2>
                        </div>
                    </div>
                    <Link href="/" className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out">
                        홈 화면
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error during delete:", error);
        return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-8 row-start-2 items-center">
                    <div className="text-center p-8 border border-red-300 bg-red-50 shadow-lg rounded-lg">
                        <h2 className="text-red-600 text-xl font-bold">
                            오류가 발생했습니다
                        </h2>
                        <p className="text-gray-600 mt-2">{error.message}</p>
                    </div>
                    <Link
                        href="/"
                        className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
                    >
                        홈 화면
                    </Link>
                </div>
            </div>
        );
    }
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
<<<<<<< HEAD
import Link from "next/link";

export const runtime = 'edge';

export default async function Delete({params}) {
    const awaitedParams = await params;
    const id = awaitedParams.id;
    console.log("delete parameter(id) = "+id);
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/delete/${id}`, {method: "POST"});
        if (resp.ok) {
            console.log(resp);
        } else {
            // 에러 처리: 데이터가 없을 때
            return (
                <>
                    <h2>Not found ID No. {awaitedParams.id}</h2>
                </>
            );
        }
        console.log("Delete successful:", resp);
        return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-[32px] row-start-2 items-center">
                    <div className="text-center p-8 border shadow-lg rounded-lg">
                        <div className="flex justify-center space-x-4 text-red-600">
                            <h2>좋은 글 ID No. {awaitedParams.id}(이)가 삭제되었습니다.</h2>
                        </div>
                    </div>
                    <Link href="/" className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out">
                        홈 화면
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error during delete:", error);
        return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-8 row-start-2 items-center">
                    <div className="text-center p-8 border border-red-300 bg-red-50 shadow-lg rounded-lg">
                        <h2 className="text-red-600 text-xl font-bold">
                            오류가 발생했습니다
                        </h2>
                        <p className="text-gray-600 mt-2">{error.message}</p>
                    </div>
                    <Link
                        href="/"
                        className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
                    >
                        홈 화면
                    </Link>
                </div>
            </div>
        );
    }
=======
import Link from "next/link";

export const runtime = 'edge';

export default async function Delete({params}) {
    const awaitedParams = await params;
    const id = awaitedParams.id;
    console.log("delete parameter(id) = "+id);
    try {
        const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/delete/${id}`, {method: "POST"});
        if (resp.ok) {
            console.log(resp);
        } else {
            // 에러 처리: 데이터가 없을 때
            return (
                <>
                    <h2>Not found ID No. {awaitedParams.id}</h2>
                </>
            );
        }
        console.log("Delete successful:", resp);
        return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-[32px] row-start-2 items-center">
                    <div className="text-center p-8 border shadow-lg rounded-lg">
                        <div className="flex justify-center space-x-4 text-red-600">
                            <h2>좋은 글 ID No. {awaitedParams.id}(이)가 삭제되었습니다.</h2>
                        </div>
                    </div>
                    <Link href="/" className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out">
                        홈 화면
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error during delete:", error);
        return (
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
                <div className="flex flex-col gap-8 row-start-2 items-center">
                    <div className="text-center p-8 border border-red-300 bg-red-50 shadow-lg rounded-lg">
                        <h2 className="text-red-600 text-xl font-bold">
                            오류가 발생했습니다
                        </h2>
                        <p className="text-gray-600 mt-2">{error.message}</p>
                    </div>
                    <Link
                        href="/"
                        className="bg-gray-800 text-white font-bold px-7 py-3 rounded-full shadow-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
                    >
                        홈 화면
                    </Link>
                </div>
            </div>
        );
    }
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