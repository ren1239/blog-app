/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myportfolio.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
