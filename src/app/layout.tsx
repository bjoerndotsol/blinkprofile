import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

import { siteMetadata } from "./metadata";

import AppWalletProvider from "./components/AppWalletProvider";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center p-4">
          <AppWalletProvider>{children}</AppWalletProvider>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
