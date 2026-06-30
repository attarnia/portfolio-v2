import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/template/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amirhossein Attarnia | Frontend Developer",
    template: "%s | Amirhossein Attarnia",
  },
  description:
    "Amirhossein Attarnia is a frontend developer specializing in modern, responsive, and high-performance web applications using React, Next.js, and Tailwind CSS.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
    "Tailwind CSS",
    "Portfolio",
  ],

  authors: [{ name: "Amirhossein Attarnia" }],

  openGraph: {
    title: "Amirhossein Attarnia | Frontend Developer",
    description:
      "Portfolio of Amirhossein Attarnia, a frontend developer focused on building clean, modern, and user-friendly web interfaces.",
    url: "https://your-domain.com",
    siteName: "Amirhossein Portfolio",
    images: [
      {
        url: "/img/og-image.jpg", // create this later
        width: 1200,
        height: 630,
        alt: "Amirhossein Attarnia Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amirhossein Attarnia | Frontend Developer",
    description:
      "Frontend developer building modern web experiences with React & Next.js.",
    images: ["/img/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL("https://your-domain.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
