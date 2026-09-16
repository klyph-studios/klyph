import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

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
    <html lang="en" data-theme="dark" className={`${outfit.variable} ${plusJakarta.variable}`}>
      <body className="antialiased selection:bg-white selection:text-black">
        {/* Lenis Smooth Scroll & GSAP Synchronization Wrapper */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
