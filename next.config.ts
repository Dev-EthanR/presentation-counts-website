import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "presentationcounts.com" }],
        destination: "https://www.presentationcounts.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
