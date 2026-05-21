import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yannick Dederichs — Your Offer from ecoplanet",
  description: "Energieberater Regulatorik & Fördermittel — come build the future of energy management with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/ecoplanet-logo-wordmark.svg" />
        <link rel="preload" as="image" href="/team-photo-2.jpg" />
        <link rel="preload" as="image" href="/team-photo-1.jpg" />
        <link rel="preload" as="image" href="/ecoplanet-logo.svg" />
        <link rel="icon" href="/favicon.ico" sizes="256x256" type="image/x-icon" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
