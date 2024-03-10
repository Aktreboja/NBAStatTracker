// const path = require('path')
// todo: Save for later
// module.exports = {
//   reactStrictMode: true,
//   images: {
//     domains: ["ak-static.cms.nba.com", "cdn.nba.com"]
//   },
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'Stylesheets')]
//   }
// }


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
  }
}