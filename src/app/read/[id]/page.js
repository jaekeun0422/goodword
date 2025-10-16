import Link from "next/link";

export default async function Read({params}) {
    const awaitedParams = await params;
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+`/api/${awaitedParams.id}`);
    let topic = null;
    if (resp.ok) {
        topic = await resp.json(); // 데이터가 있을 때
        // hit수 1증가
        topic.hit++;
        // hit 숫자를 DB에 update
        console.log(`id = {topic.id}, hit = {topic.hit}`);
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(topic)}
        try {
            const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `/api/update`, options);
            if (resp.ok) {
                console.log("Post updated successfully!");
            } else {
                console.error("Failed to update post by fetch()");
                //alert("수정(hit)에 실패했습니다 by fetch()");
            }
        }
        catch (error) {
            console.error("An error occurred at catch(error)", error);
            //alert("오류가 발생했습니다. 다시 시도해주세요 by catch(error)");
        }

    } else {
        // 에러 처리: 데이터가 없을 때
        return (
            <>
                <h2>Not found ID No. {awaitedParams.id}</h2>
            </>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
                <form className="w-full max-w-2xl bg-white p-8 border border-gray-200 shadow-lg rounded-xl">
                    <div className="mb-4">
                        <input
                            type="text"
                            name="category"
                            value={topic.category} readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="subject"
                            value={topic.subject} readOnly
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-800"
                        />
                    </div>

                    <div className="mb-6">
                        <textarea
                            name="content"
                            value={topic.content} readOnly
                            rows="10"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-800"
                        ></textarea>
                    </div>
                </form>

                <div className="flex flex-row gap-4 items-center justify-center mt-8">
                    <Link href={`/delete/${topic.id}`} className="bg-blue-400 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
                        글 삭제
                    </Link>
                    <Link href="/" className="bg-blue-400 text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out">
                        홈 화면
                    </Link>
                </div>
        </div>
    );
}