export async function GET() {
    try {
        const apiUrl = 'http://www.yeoreka.com/goodword/api/getAll';

        console.log('Fetching from:', apiUrl);

        const response = await fetch(apiUrl, {
            cache: 'no-store',
            headers: {
                'User-Agent': 'Mozilla/5.0',
            },
        });

        console.log('Response status:', response.status);
        console.log('Response headers:', Object.fromEntries(response.headers));

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error response:', errorText);

            return Response.json(
                {
                    error: 'API Error',
                    status: response.status,
                    statusText: response.statusText,
                    body: errorText
                },
                { status: response.status }
            );
        }

        const data = await response.json();
        return Response.json(data);

    } catch (error) {
        console.error('Fetch error:', error);
        return Response.json(
            {
                error: 'Failed to fetch data',
                message: error.message,
                stack: error.stack
            },
            { status: 500 }
        );
    }
}