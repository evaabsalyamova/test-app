/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/test-app",
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;