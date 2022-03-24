const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["ak-static.cms.nba.com", "cdn.nba.com"]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'Stylesheets')]
  }
}
