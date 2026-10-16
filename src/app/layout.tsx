import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LOGO } from "@/lib/constants";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sajilokhata.gambhirpoudel.com.np/"),
  title: "Sajilo Khata - Nepal SMS Expense Tracker | Verdant Sol",
  description:
    "Nepal's smartest expense tracker. Automatically reads bank SMS to log income and expenses. Track savings goals, set budgets, and manage your money in NPR with 100% offline privacy.",
  keywords: [
    "Nepal expense tracker",
    "SMS expense tracker",
    "Nepal finance app",
    "budget tracker Nepal",
    "savings goals",
    "NPR tracker",
    "offline finance Nepal",
  ],
  openGraph: {
    title: "Sajilo Khata - Nepal SMS Expense Tracker",
    description:
      "Automatically track income and expenses by reading bank SMS. Built for Nepal with 100% offline-first privacy.",
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
    icon: [
      { url: LOGO, type: "image/svg+xml" },
    ],
    shortcut: LOGO,
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
      className={`${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F8FAF6] text-[#191C1A] antialiased selection:bg-[#DDFFD1] selection:text-[#062105] font-sans">
        {children}
      </body>
    </html>
  );
}
