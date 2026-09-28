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
  title: "Agentic Infrastructure — Built for Autonomous Agents",
  description: "Durable orchestration, sandboxed microVM environments, and universal AI gateway to build and ship coding agents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <body className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
