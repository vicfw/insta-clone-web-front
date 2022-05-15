/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URI: 'http://localhost:3000/',
  },
};

module.exports = nextConfig;
