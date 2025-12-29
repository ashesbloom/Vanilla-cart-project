const basePath = "/Vanilla-cart-project";

export default function imageLoader({ src }) {
  // If src starts with http or https, return as-is
  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }
  // If src starts with /, prepend basePath
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}
