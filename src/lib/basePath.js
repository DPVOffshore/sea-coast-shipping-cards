// next/image does not auto-prefix `src` with basePath when
// images.unoptimized is true (required for static GitHub Pages
// hosting), so public-folder image paths need this applied manually.
export function withBasePath(path) {
  if (!path || /^https?:\/\//.test(path)) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
