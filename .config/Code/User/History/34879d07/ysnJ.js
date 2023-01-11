/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "scontent.cdninstagram.com",
      port: "",
    },
  ],
};

module.exports = nextConfig;
