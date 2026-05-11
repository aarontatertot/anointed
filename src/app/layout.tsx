import type { Metadata, Viewport } from "next";
import "./globals.css";
import PasswordGate from "../components/PasswordGate";

export const viewport: Viewport = {
  themeColor: "#18181B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://anointedbarbershop.com"),
  title: "Anointed - Equipped with Belief",
  description: "A home for precision, artistry, and the style that defines you.",
  alternates: {
    canonical: "https://anointedbarbershop.com",
  },
  openGraph: {
    title: "Anointed - Equipped with Belief",
    description: "A home for precision, artistry, and the style that defines you.",
    url: "https://anointedbarbershop.com",
    siteName: "Anointed - Equipped with Belief",
    images: [{ url: "/seo/ogp.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anointed - Equipped with Belief",
    description: "A home for precision, artistry, and the style that defines you.",
    images: ["/seo/ogp.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon-a-black.png", type: "image/png" }],
    apple: { url: "/favicon-a-black.png", sizes: "180x180" },
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Roboto+Mono:wght@400;500&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><PasswordGate>{children}</PasswordGate></body>
    </html>
  );
}
