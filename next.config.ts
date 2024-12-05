import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "s3.amazonaws.com",
    //     port: "",
    //     pathname: "/my-bucket/**",
    //   },
    // ],
    localPatterns: [
      {
        pathname: "/assets/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
