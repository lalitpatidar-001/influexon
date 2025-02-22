import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['i.pinimg.com', 'www.socialpilot.co', 'cdn.thebrandingjournal.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      timers: require.resolve('timers-browserify'),
    };
    return config;
  },
  experimental: {
    turbo: {}, // Disable Turbopack
  },
};

export default nextConfig;
