/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isStaticExport = process.env.STATIC_EXPORT === "true";
const repoName = "Vanilla-cart-project";

const nextConfig = {
  // Only use static export for GitHub Pages deployment
  // API routes work in development and when deployed to a Node.js server
  ...(isStaticExport && { output: "export" }),
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
};

export default nextConfig;
