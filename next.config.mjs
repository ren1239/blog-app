/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.myportfolio.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.thenounproject.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
