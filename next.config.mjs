/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  env:{
    APP_URL:process.env.REACT_APP_URL,
    APP_ENV:process.env.REACT_APP_ENV
  },
  async rewrites(){
    return[
      {
        source:'/:path*',
        destination:`https://chsc-backend-production.up.railway.app/:path*`,
      }
    ]
  }
};

export default nextConfig;
