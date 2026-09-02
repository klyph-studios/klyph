import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

export const metadata: Metadata = {
  title: "Klyph — Ultra-Premium Digital Studio",
  description: "Bespoke Next.js web architecture, GSAP + ScrollTrigger scroll animations, Lenis smooth scrolling, personal branding, and autonomous AI systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Lenis Smooth Scroll & GSAP Synchronization Wrapper */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
