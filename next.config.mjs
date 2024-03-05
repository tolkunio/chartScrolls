/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
      remotePatterns:[
        {
          protocol:'https',
          hostname:'"s3.polygon.io',
          pathname:'/public/assets/news/logos/**'
        }
      ]
  }

};

export default nextConfig;
