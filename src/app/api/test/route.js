export async function GET() {
    const testUrls = [
        'http://www.yeoreka.com',
        'http://yeoreka.com',
        'http://www.yeoreka.com/goodword',
        'http://www.yeoreka.com/api',
    ];

    const results = await Promise.all(
        testUrls.map(async (url) => {
            try {
                const res = await fetch(url, { cache: 'no-store' });
                return {
                    url,
                    status: res.status,
                    ok: res.ok,
                };
            } catch (error) {
                return {
                    url,
                    error: error.message,
                };
            }
        })
    );

    return Response.json(results);
}