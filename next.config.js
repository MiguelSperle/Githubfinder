/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: [
      'avatars.githubusercontent.com',
      'github-readme-stats.vercel.app',
    ],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
