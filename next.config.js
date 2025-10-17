/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/yeoga/goodword/api/getAll",
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/getAll`,
            },
        ];
    },
};


module.exports = nextConfig;
