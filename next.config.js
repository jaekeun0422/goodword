<<<<<<< Updated upstream
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge',
  },
}

module.exports = nextConfig


=======
<<<<<<< HEAD
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/getAll",
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/getAll`,
            },
        ];
    },
};

module.exports = nextConfig;
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge',
  },
}

module.exports = nextConfig


>>>>>>> afa3554ad93ba18f396aa873c9ebb2ad705c9b4f
>>>>>>> Stashed changes
