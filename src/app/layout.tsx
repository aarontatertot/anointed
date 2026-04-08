import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#18181B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ANOINTED — Premium Hair Studio",
  description: "A home for precision, artistry, and the style that defines you.",
  openGraph: {
    title: "ANOINTED",
    description: "A home for precision, artistry, and the style that defines you.",
    url: "https://anointed.vercel.app",
    siteName: "ANOINTED",
    images: [{ url: "/seo/ogp.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANOINTED",
    description: "A home for precision, artistry, and the style that defines you.",
    images: ["/seo/ogp.jpg"],
  },
  icons: {
    icon: "/seo/favicon.ico",
    apple: { url: "/seo/apple-touch.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@500&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
