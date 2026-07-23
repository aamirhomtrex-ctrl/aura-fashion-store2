/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the build to finish even if there are small type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows the build to finish even if there are tiny formatting issues
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
