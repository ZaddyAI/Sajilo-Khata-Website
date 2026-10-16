import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { LOGO } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sajilokhata.gambhirpoudel.com.np/"),
  title: "Sajilo Khata - Nepal SMS Expense Tracker",
  description:
    "Nepal's smartest expense tracker. Automatically reads bank SMS to log income and expenses. Track savings goals, set budgets, and manage your money in NPR.",
  keywords: [
    "Nepal expense tracker",
    "SMS expense tracker",
    "Nepal finance app",
    "budget tracker Nepal",
    "savings goals",
    "NPR tracker",
  ],
  openGraph: {
    title: "Sajilo Khata - Nepal SMS Expense Tracker",
    description:
      "Automatically track income and expenses by reading bank SMS. Built for Nepal.",
    url: "https://sajilokhata.gambhirpoudel.com.np/",
    siteName: "Sajilo Khata",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: LOGO,
        width: 512,
        height: 512,
        alt: "Sajilo Khata Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajilo Khata - Nepal SMS Expense Tracker",
    description:
      "Automatically track income and expenses by reading bank SMS. Built for Nepal.",
    images: [LOGO],
  },
  icons: {
    icon: LOGO,
    apple: LOGO,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7FCF9] text-[#0F172A] antialiased selection:bg-[#D1FAE5] selection:text-[#065F46]">
        {children}
      </body>
    </html>
  );
}
