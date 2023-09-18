/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
      serverActions: true,
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
    
}

module.exports = nextConfig

// images: {
//   domains: ['res.cloudinary.com'],
// },