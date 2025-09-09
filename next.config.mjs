/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.unikalklinika.az',
      },
      {
        protocol: 'https',
        hostname: 'unikalklinika.az',
      },
    ],
  },
};

export default nextConfig;
