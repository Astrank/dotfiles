/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["ws-na.amazon-adsystem.com"],
    },
};

module.exports = nextConfig;
