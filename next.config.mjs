/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: true,
    optimizePackageImports: [
      "@radix-ui/react-accordion",
      "@radix-ui/react-slot",
      "clsx",
      "tailwind-merge",
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": process.cwd(),
      "@/components": `${process.cwd()}/components`,
      "@/lib": `${process.cwd()}/lib`,
      "@/components/ui": `${process.cwd()}/components/ui`,
    };
    config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx"];
    return config;
  },
  transpilePackages: [
    "@/components/ui",
    "@radix-ui/react-accordion",
    "@radix-ui/react-slot",
    "clsx",
    "tailwind-merge",
  ],
};

export default nextConfig;
