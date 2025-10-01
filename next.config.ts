import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [new URL('https://i.ibb.co.com/PZVB119F/nextjs.jpg')],
  // },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       // hostname: "**",
  //       hostname: "i.ibb.co.com",
  //     },
  //   ],
  // },


  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "i.ibb.co.com", // ✅ fixed domain
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },

  //   ],
  // },


  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
