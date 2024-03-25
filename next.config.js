
/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',

        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "cdn.nba.com",
        port: '',
        pathname: "/headshots/nba/latest/1040x760/*"
      }
    ]
  },
}

module.exports = nextConfig;