"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Banks", href: "#banks" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header className="sticky top-4 z-50 px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="nav-pill">
            {/* Brand */}
            <Link
              href="/"
              className="flex items-center gap-2.5 focus:outline-none group"
              aria-label="Sajilo Khata Home"
            >
              <Image
                src={LOGO}
                alt="Sajilo Khata Logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl object-contain shadow-xs group-hover:scale-105 transition-transform"
                priority
              />
              <span className="font-manrope text-base sm:text-lg font-extrabold tracking-tight text-[#202923]">
                {APP_NAME}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#607873]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 rounded-full hover:text-[#129671] hover:bg-[#E7F4EE] transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-2">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-forest inline-flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-bold"
              >
                <PlayStoreIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Get the app</span>
                <span className="sm:hidden">App</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#202923] hover:bg-black/5 rounded-full"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-black/30 backdrop-blur-xs md:hidden">
          <div className="m-4 rounded-3xl bg-white/95 backdrop-blur-md p-6 shadow-2xl border border-[#E8E9E2] space-y-4">
            <nav className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-[#202923] hover:bg-[#E7F4EE] hover:text-[#129671] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href={LINKS.privacy}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-[#202923] hover:bg-[#E7F4EE] hover:text-[#129671] transition-colors"
              >
                Privacy Policy
              </Link>
            </nav>
            <div className="pt-3 border-t border-[#E8E9E2]">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-forest flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-bold"
              >
                <PlayStoreIcon className="w-4 h-4" />
                <span>Get on Google Play</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
