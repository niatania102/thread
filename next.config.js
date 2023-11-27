/** @type {import('next').NextConfig} */
const nextConfig = {};

// configure the domains from which Next.js can load images.
module.exports = {
  images: {
    domains: ["img.clerk.com"],
  },
};
