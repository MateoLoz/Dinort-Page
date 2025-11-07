
const isServer = typeof window === 'undefined';
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';


export const env = {
    NODE_ENV: process.env.NODE_ENV,
    IS_SERVER: isServer,
    IS_DEV: isDev,
    IS_PROD: isProd,
  
    API_URL: process.env.NEXT_PUBLIC_API_URL!,

  };