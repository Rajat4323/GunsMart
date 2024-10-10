/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.guns.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mainpage',
        permanent: true, 
      },
    ];
  },
};

module.exports = nextConfig;
