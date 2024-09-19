/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.prod.website-files.com",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
