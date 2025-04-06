import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tse3.mm.bing.net',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
      },
      {protocol: 'https',
        hostname: 'ngm2rezkv7xx1q16.public.blob.vercel-storage.com'
      }
    ],
  },
};

export default nextConfig;
