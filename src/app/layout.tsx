import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

import AppWalletProvider from "./components/AppWalletProvider";

export const metadata: Metadata = {
  title: "@bjoerndotsol",
  description: "DevRel Engineer at Dialect Labs",
  openGraph: {
    title: "@bjoerndotsol",
    description: "DevRel Engineer at Dialect Labs",
    images: [
      {
        url: "/banner.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "@bjoerndotsol",
    description: "DevRel Engineer at Dialect Labs",
    images: ["/banner.jpg"],
  },
};

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
        </main>
      </body>
    </html>
  );
}
