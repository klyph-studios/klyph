import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klyph — Ultra-Premium Web Architecture & AI Systems",
  description: "Bespoke Next.js web architecture, GSAP kinetic motion, executive branding, and autonomous AI systems engineered for market leaders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable} style={{ backgroundColor: "#000000", color: "#ffffff" }}>
      <body
        className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black min-h-screen"
        style={{ backgroundColor: "#000000", color: "#ffffff", margin: 0 }}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
