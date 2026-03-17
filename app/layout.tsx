import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Glowing from "./components/Glowing";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  weight: ["800", "600", "500", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lindan Akbar | Junior Front End Engineer",
  description:
    "Lindan Akbar is a Frontend Engineer and CTF Player based in Indonesia. Check out my seamless, pixel-perfect digital experiences and security insights.",
  keywords: [
    "Lindan",
    "Lindan Akbar",
    "BocahanCiledug",
    "Lndn",
    "Frontend Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "CTF Player",
    "Cyber Security",
    "Penetration Testing"
  ],
  openGraph: {
    title: "Lindan Akbar | Front End Engineer & CTF Player",
    description: "I craft seamless, pixel-perfect digital experiences that bring accessibility and innovation to the web.",
    url: "https://lindan.vercel.app",
    siteName: "Lindan Akbar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindan Akbar | Front End Engineer & CTF Player",
    description: "I craft seamless, pixel-perfect digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-slate-900 selection:bg-teal-300 selection:text-teal-900 leading-relaxed`}
      >
        <Analytics />
        <Glowing />
        <section>{children}</section>
        <Toaster />
      </body>
    </html>
  );
}
