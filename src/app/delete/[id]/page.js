import Link from "next/link";

export default async function Delete({params}) {
    const awaitedParams = await params;
    const id = awaitedParams.id;
    console.log("delete parameter(id) = "+id);
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`api/delete/${id}`, {method: "POST"});
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
}