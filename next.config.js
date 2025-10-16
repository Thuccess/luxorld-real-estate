/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  basePath: '/my-next-app', // replace with your repo name
  images: { unoptimized: true },
};

module.exports = nextConfig;
