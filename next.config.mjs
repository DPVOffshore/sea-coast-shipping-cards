// If you deploy to GitHub Pages at https://<user>.github.io/<repo>,
// set repoName to the repository name. On Vercel or a custom domain,
// GITHUB_ACTIONS is not set, so basePath stays empty and nothing changes.
const repoName = "sea-coast-shipping-cards";
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: isGithubActions ? `/${repoName}` : "",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? `/${repoName}` : "",
  },
};

export default nextConfig;
