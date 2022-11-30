/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix:
    process.env.NODE_ENV === 'production'
    ? 'https://jisookoh.github.io/'
    : '',
}

module.exports = nextConfig
