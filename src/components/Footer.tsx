import Link from "next/link";
import Image from "next/image";
import { APP_NAME, DEVELOPER, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, GithubIcon, NepalFlagIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08634D] text-[#F8F7F2] border-t border-[#0D4738]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={LOGO}
                alt="Sajilo Khata Logo"
                width={44}
                height={44}
                className="h-11 w-11 rounded-2xl object-contain shadow-md"
              />
              <span className="font-manrope text-xl font-extrabold tracking-tight text-white">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-sm">
              Nepal&apos;s smartest SMS expense tracker. Automatically categorizes bank transactions, tracks savings goals in NPR, and runs 100% offline with zero cloud privacy risks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#08634D] hover:bg-[#D8F3E8] transition-colors shadow-sm"
              >
                <PlayStoreIcon className="w-4 h-4 text-[#08634D]" />
                <span>Google Play</span>
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-manrope text-xs font-bold text-[#D8F3E8] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#banks" className="hover:text-white transition-colors">
                  Supported Banks
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Savings Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-manrope text-xs font-bold text-[#D8F3E8] uppercase tracking-wider mb-4">
              Legal &amp; Privacy
            </h3>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href={LINKS.privacy} className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={LINKS.terms} className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">
                  Privacy Architecture
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Security FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Attribution (Centralized from constants, no RedPixel Labs) */}
          <div>
            <h3 className="font-manrope text-xs font-bold text-[#D8F3E8] uppercase tracking-wider mb-4">
              Developer
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Created &amp; maintained by{" "}
                <a
                  href={DEVELOPER.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#D8F3E8] transition-colors underline decoration-white/40 underline-offset-2"
                >
                  {DEVELOPER.name}
                </a>
              </p>
              <p className="text-xs text-emerald-200/70">
                Contact:{" "}
                <a
                  href={`mailto:${DEVELOPER.email}`}
                  className="text-white hover:underline"
                >
                  {DEVELOPER.email}
                </a>
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-emerald-100">
                  <NepalFlagIcon className="w-3.5 h-3.5" />
                  <span>Made in Nepal</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-200/60 gap-4">
          <p>
            &copy; {currentYear} {APP_NAME}. All rights reserved. Built for Nepal.
          </p>
          <p className="flex items-center gap-1">
            Engineered with Next.js, Tailwind CSS &amp; Flutter Hive Engine.
          </p>
        </div>
      </div>
    </footer>
  );
}
