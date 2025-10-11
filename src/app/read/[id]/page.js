import Link from "next/link";

export default async function Read({params}) {
    const awaitedParams = await params;
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`goodword/${awaitedParams.id}`);
    let topic = null;
    if (resp.ok) {
        topic = await resp.json(); // 데이터가 있을 때
    } else {
        // 에러 처리: 데이터가 없을 때
        return (
            <>
                <h2>Not found ID No. {awaitedParams.id}</h2>
            </>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="text-center p-8 border shadow-lg rounded-lg">
                <h4 className="text-xl font-semibold mb-2">{topic.category}</h4>
                <div className="flex justify-center space-x-4 text-gray-600 mb-4">
                    <p>{topic.subject}</p>
                    <p>조회수: {topic.hit}</p>
                </div>
                <p>{topic.content}</p>
            </div>
            <div className="mt-5">
                <Link href="/" className="bg-blue-400 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
                    홈 화면으로
                </Link>
            </div>
        </div>
    );
}