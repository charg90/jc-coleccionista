/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["http2.mlstatic.com"],
  },
};

module.exports = nextConfig;

//https://http2.mlstatic.com/
