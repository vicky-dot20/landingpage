const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
       'aceternity.com',
    ],
    // Define remote patterns
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      
    ],
  },
};

export default nextConfig;
