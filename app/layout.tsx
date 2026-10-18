import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhavana & Gowtham | Wedding Celebration",
  description:
    "Join Bhavana and Gowtham in Hyderabad from 12 to 15 November 2026 for four days of celebration, music, and memories.",
  openGraph: {
    title: "Bhavana & Gowtham | Wedding Celebration",
    description:
      "Celebrate with Bhavana and Gowtham in Hyderabad, 12–15 November 2026.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
