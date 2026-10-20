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

const isGroomInvitation = process.env.NEXT_PUBLIC_INVITATION_SIDE === "groom";
const invitationTitle = isGroomInvitation
  ? "Bhavana & Gowtham | Groom's Family Celebrations"
  : "Bhavana & Gowtham | Wedding Celebration";
const invitationDescription = isGroomInvitation
  ? "Join Bhavana and Gowtham's families for wedding celebrations in Hyderabad and Rajahmundry, 11 to 22 November 2026."
  : "Join Bhavana and Gowtham in Hyderabad from 12 to 15 November 2026 for four days of celebration, music, and memories.";

export const metadata: Metadata = {
  title: invitationTitle,
  description: invitationDescription,
  openGraph: {
    title: invitationTitle,
    description: invitationDescription,
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
