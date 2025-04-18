import path from "path";

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
      "@": path.resolve(__dirname),
      "@/components": path.resolve(__dirname, "components"),
      "@/lib": path.resolve(__dirname, "lib"),
      "@/components/ui": path.resolve(__dirname, "components", "ui"),
    };
    config.resolve.extensions = [".js", ".jsx", ".ts", ".tsx", ".mjs"];
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
