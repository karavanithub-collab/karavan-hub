/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'karavanhub.com',
      },
    ],
  },
}

module.exports = nextConfig
