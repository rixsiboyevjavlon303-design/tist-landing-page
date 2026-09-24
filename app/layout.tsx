import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toshkent iqtisodiyot va soliq texnikumi",
  description:
    "Toshkent iqtisodiyot va soliq texnikumi — professional ta'lim, zamonaviy kasblar va kelajak sari imkoniyatlar.",
  applicationName: "Toshkent iqtisodiyot va soliq texnikumi",
  openGraph: {
    title: "Toshkent iqtisodiyot va soliq texnikumi",
    description:
      "Toshkent iqtisodiyot va soliq texnikumi — professional ta'lim, zamonaviy kasblar va kelajak sari imkoniyatlar.",
    type: "website",
    locale: "uz_UZ",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1920,
        height: 1440,
        alt: "Toshkent iqtisodiyot va soliq texnikumi",
      },
    ],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b126b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className={inter.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}