// Helper to get correct image path for both development and GitHub Pages
const basePath = process.env.NODE_ENV === "production" ? "/Vanilla-cart-project" : "";

export function getImagePath(src) {
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}

export default getImagePath;
