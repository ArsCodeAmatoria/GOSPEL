import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/safety/swa-library",
        destination: "/safety/jha-library",
        permanent: true,
      },
      {
        source: "/safety/swa/:slug",
        destination: "/safety/jha/:slug",
        permanent: true,
      },
      {
        source: "/hire",
        destination: "/safety",
        permanent: true,
      },
      {
        source: "/crew",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
