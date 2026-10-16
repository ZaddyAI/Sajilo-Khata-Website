import Link from "next/link";
import Image from "next/image";
import { APP_NAME, DEVELOPER, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, GithubIcon, NepalFlagIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#475569] border-t border-[#E6F4ED] relative">
      {/* Delicate top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-100 opacity-60" />

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
                className="h-11 w-11 rounded-2xl object-contain shadow-sm"
              />
              <span className="font-manrope text-xl font-extrabold tracking-tight text-[#0F172A]">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              Nepal&apos;s smartest SMS expense tracker. Automatically categorizes bank transactions, tracks savings goals in NPR, and runs 100% offline with zero cloud privacy risks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] px-4 py-2 text-xs font-bold text-[#059669] hover:bg-[#D1FAE5] transition-colors shadow-2xs"
              >
                <PlayStoreIcon className="w-4 h-4 text-[#059669]" />
                <span>Google Play</span>
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-[#0F172A] hover:bg-slate-50 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-[#475569]" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-manrope text-xs font-bold text-[#059669] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li>
                <Link href="/#features" className="hover:text-[#059669] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#059669] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#banks" className="hover:text-[#059669] transition-colors">
                  Supported Banks
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-manrope text-xs font-bold text-[#059669] uppercase tracking-wider mb-4">
              Legal &amp; Privacy
            </h3>
            <ul className="space-y-2.5 text-xs text-[#475569]">
              <li>
                <Link href={LINKS.privacy} className="hover:text-[#059669] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={LINKS.terms} className="hover:text-[#059669] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#059669] transition-colors">
                  Security FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Attribution */}
          <div>
            <h3 className="font-manrope text-xs font-bold text-[#059669] uppercase tracking-wider mb-4">
              Developer
            </h3>
            <div className="space-y-3">
              <p className="text-xs text-[#475569] leading-relaxed">
                Created &amp; maintained by{" "}
                <a
                  href={DEVELOPER.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#0F172A] hover:text-[#059669] transition-colors underline decoration-slate-300 underline-offset-2"
                >
                  {DEVELOPER.name}
                </a>
              </p>
              <p className="text-xs text-[#64748B]">
                Contact:{" "}
                <a
                  href={`mailto:${DEVELOPER.email}`}
                  className="text-[#059669] font-medium hover:underline"
                >
                  {DEVELOPER.email}
                </a>
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] border border-[#D1FAE5] px-3 py-1 text-[11px] font-semibold text-[#059669]">
                  <NepalFlagIcon className="w-3.5 h-3.5" />
                  <span>Made in Nepal</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#E6F4ED] flex flex-col sm:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
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
