/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_AUTH_API_URL: process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:8081',
    NEXT_PUBLIC_PLAYER_API_URL: process.env.NEXT_PUBLIC_PLAYER_API_URL || 'http://localhost:8082',
    NEXT_PUBLIC_MONSTER_API_URL: process.env.NEXT_PUBLIC_MONSTER_API_URL || 'http://localhost:8083',
    NEXT_PUBLIC_INVOCATION_API_URL: process.env.NEXT_PUBLIC_INVOCATION_API_URL || 'http://localhost:8084',
    NEXT_PUBLIC_COMBAT_API_URL: process.env.NEXT_PUBLIC_COMBAT_API_URL || 'http://localhost:8085',
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
