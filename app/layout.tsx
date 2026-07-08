import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBotLoader from "@/components/layout/ChatBotLoader";
import MobileActionBar from "@/components/layout/MobileActionBar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Home Healthcare & Elder Care in Kolkata`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "home healthcare Kolkata",
    "elderly care Kolkata",
    "home nursing Kolkata",
    "elderly care Kolkata for NRI",
    "home ICU Kolkata",
    "physiotherapy at home Kolkata",
    "home care for parents Kolkata",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Home Healthcare & Elder Care in Kolkata`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Home Healthcare & Elder Care in Kolkata`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-forest pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBotLoader />
        <MobileActionBar />
      </body>
    </html>
  );
}
