import Link from "next/link";
import Image from "next/image";
import { APP_NAME, DEVELOPER, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, GithubIcon, NepalFlagIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121612] text-[#C1C9BC] border-t border-white/10 relative select-none">
      {/* Delicate botanical accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#425F3C] via-[#7E9F76] to-[#425F3C] opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-1 rounded-2xl bg-white/10 border border-white/15">
                <Image
                  src={LOGO}
                  alt="Sajilo Khata Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl overflow-hidden object-contain shadow-sm"
                />
              </div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-white">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-sm text-[#C1C9BC] leading-relaxed max-w-sm">
              Nepal&apos;s smartest SMS expense tracker. Automatically categorizes bank transactions, tracks savings goals in NPR, and runs 100% offline with zero cloud privacy risks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#1B221A] px-4 py-2 text-xs font-bold hover:bg-[#F2F4F0] transition-colors shadow-sm"
              >
                <PlayStoreIcon className="w-4 h-4 text-[#1B221A]" />
                <span>Google Play</span>
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#C1C9BC]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-sans text-xs font-bold text-[#AFD0A4] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C1C9BC]">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#banks" className="hover:text-white transition-colors">
                  Supported Banks
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sans text-xs font-bold text-[#AFD0A4] uppercase tracking-wider mb-4">
              Legal &amp; Privacy
            </h3>
            <ul className="space-y-2.5 text-xs text-[#C1C9BC]">
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
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Security FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Attribution */}
          <div>
            <h3 className="font-sans text-xs font-bold text-[#AFD0A4] uppercase tracking-wider mb-4">
              Developer
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-[#C1C9BC] leading-relaxed">
                Created &amp; maintained by{" "}
                <a
                  href={DEVELOPER.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-[#AFD0A4] transition-colors underline decoration-white/30 underline-offset-2"
                >
                  {DEVELOPER.name}
                </a>
              </p>
              <p className="text-xs text-[#C1C9BC]">
                Contact:{" "}
                <a
                  href={`mailto:${DEVELOPER.email}`}
                  className="text-[#DDFFD1] font-medium hover:underline"
                >
                  {DEVELOPER.email}
                </a>
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] font-semibold text-[#DDFFD1]">
                  <NepalFlagIcon className="w-3.5 h-3.5" />
                  <span>Made in Nepal</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#73796F] gap-4">
          <p>
            &copy; {currentYear} {APP_NAME}. All rights reserved. Built for Nepal.
          </p>
          <p className="flex items-center gap-1 text-[#596056]">
            Engineered with Next.js, Tailwind CSS &amp; Flutter Hive Engine.
          </p>
        </div>
      </div>
    </footer>
  );
}
