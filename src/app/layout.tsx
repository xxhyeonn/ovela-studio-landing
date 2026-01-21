import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ovela Studio - Webflow Ecommerce Website Template",
  description: "Premium design studio offering web design, branding, product design, and motion services.",
  keywords: ["web design", "branding", "product design", "motion", "design studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        {/* Noise/Grain Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
