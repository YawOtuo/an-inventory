/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
    experimental: {
      appDir: true,
    },
    async redirects() {
      return [
        // {
        //   source: '/',
        //   destination: '/home',
        //   permanent: false,
        // },
      ];
    },
    images: {
      domains: ['res.cloudinary.com', 'images.unsplash.com'],
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  module.exports = nextConfig;
  