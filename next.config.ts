import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
 images:{
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'dsdgghfqjakupbixmmvv.supabase.co',
      port: '',
      pathname: '/storage/v1/object/sign/**',
    }
  ]
 }
};



export default nextConfig;
