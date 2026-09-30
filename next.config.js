/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_URL],
  },
};

module.exports = nextConfig;
