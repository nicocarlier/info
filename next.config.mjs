/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/info',
  assetPrefix: '/info',
  reactStrictMode: true,
  trailingSlash: true,
};

export default nextConfig;