import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANOINTED — Premium Hair Studio",
  description: "Premium editorial hair studio in Salt Lake City. Precision cuts, custom color, and artistry by appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
