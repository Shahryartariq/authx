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
  title: "AuthX | Advanced Authentication System",
  description: "AuthX is a full-featured authentication and authorization system built with Next.js 14, Next-Auth v5, and server actions. It provides secure and flexible user management with support for credentials login, Google/GitHub OAuth, email verification, password reset, and two-factor authentication (2FA). AuthX includes role-based access control for Admin/User, fully protected routes, reusable UI components, and customizable hooks/utilities for seamless integration across server and client components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
