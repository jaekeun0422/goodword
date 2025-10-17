export async function GET() {
    try {
        const response = await fetch('http://www.yeoreka.com/goodword/api/getAll', {
            // Node.js 환경에서는 HTTP 요청 가능
            cache: 'no-store', // 또는 'force-cache', 'revalidate' 등
        });

        if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
        }

        const data = await response.json();

        return Response.json(data, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        });
    } catch (error) {
        console.error('API Proxy Error:', error);
        return Response.json(
            { error: 'Failed to fetch data', message: error.message },
            { status: 500 }
        );
    }
}