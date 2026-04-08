import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#222222",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "ANOINTED",
  description: "ONLINE STORE : ANOINTED / SRL / ANOINTED ONE THIRD",
  openGraph: {
    title: "ANOINTED",
    description: "ONLINE STORE : ANOINTED / SRL / ANOINTED ONE THIRD",
    url: "https://www.anointed.com/en",
    siteName: "ANOINTED STUDIO",
    images: [{ url: "/seo/ogp.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANOINTED",
    description: "ONLINE STORE : ANOINTED / SRL / ANOINTED ONE THIRD",
    images: ["/seo/ogp.jpg"],
  },
  icons: {
    icon: "/seo/favicon.ico",
    apple: { url: "/seo/apple-touch.png", sizes: "180x180" },
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
