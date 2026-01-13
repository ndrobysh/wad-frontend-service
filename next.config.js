/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  cacheComponents: true,
  env: {
    AUTH_API_URL: process.env.AUTH_API_URL || 'http://localhost:8081',
    PLAYER_API_URL: process.env.PLAYER_API_URL || 'http://localhost:8082',
    MONSTER_API_URL: process.env.MONSTER_API_URL || 'http://localhost:8083',
    INVOCATION_API_URL: process.env.INVOCATION_API_URL || 'http://localhost:8084',
    COMBAT_API_URL: process.env.COMBAT_API_URL || 'http://localhost:8085',
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
