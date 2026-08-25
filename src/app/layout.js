import "./globals.css";
import { company } from "@/data/company";
import { withBasePath } from "@/lib/basePath";

export const metadata = {
  title: company.shortName,
  description: company.name,
};

export const viewport = {
  themeColor: "#0a2036",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Explicit links (rather than the metadata.icons field) so the
            GitHub Pages basePath is applied exactly once. */}
        <link rel="icon" href={withBasePath("/icon.png")} type="image/png" />
        <link rel="apple-touch-icon" href={withBasePath("/apple-touch-icon.png")} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
