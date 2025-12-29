/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages (replace 'wonderlust-travel-agency-website' with your repo name)
  basePath: process.env.NODE_ENV === "production" ? "/wonderlust-travel-agency-website" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/wonderlust-travel-agency-website" : "",
};

export default nextConfig;
