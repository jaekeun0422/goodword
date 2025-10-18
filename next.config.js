/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/yeoga/goodword/:path*",
                destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`,
            },
        ];
    },
};


module.exports = nextConfig;

