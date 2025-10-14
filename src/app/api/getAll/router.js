import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch('http://www.yeoreka.com/goodword/api/getAll');

        if (!response.ok) {
            throw new Error(`API 요청 실패: ${response.status}`);
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: '데이터를 가져오는데 실패했습니다' },
            { status: 500 }
        );
    }
}