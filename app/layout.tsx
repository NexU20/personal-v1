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
  title: "Lindan Akbar",
  description:
    "Lindan is a Frontend Engineer based in Indonesia. He loves to explore new technologies and share his knowledge with others.",
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
