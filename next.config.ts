import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jungfeld.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'snocks.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.britannica.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
