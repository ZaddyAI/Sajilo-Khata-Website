import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
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
    type: "website",
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
      className={`${manrope.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-surface text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
