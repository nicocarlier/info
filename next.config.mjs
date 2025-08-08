/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/info' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/info' : '',
  reactStrictMode: true,
};

export default nextConfig;