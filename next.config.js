/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: false,
    images: {
        formats: ['image/webp'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920, 2048, 2550, 3000, 3840],
    },
}

module.exports = nextConfig
