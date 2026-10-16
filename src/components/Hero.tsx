import { LINKS } from "@/lib/constants";
import {
  PlayStoreIcon,
  CheckIcon,
  NepalFlagIcon,
  ZapIcon,
  MountainIcon,
  TargetIcon,
} from "./Icons";
import HeroAppMockup from "./HeroAppMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-12 lg:pb-24 hero-light-bg">
      {/* Light Ambient Orbs */}
      <div className="ambient-orb ambient-orb-1" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-2" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-3" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 55% */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full badge-light-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <NepalFlagIcon className="w-3.5 h-3.5" />
              <span>MADE FOR YOUR MONEY, MADE FOR NEPAL</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-manrope text-4xl sm:text-6xl lg:text-[62px] font-extrabold tracking-tight leading-[1.08] text-[#0F172A]">
              Your money, <br />
              <span className="gradient-text-emerald">understood</span>. <br />
              Automatically.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-lg">
              Sajilo Khata reads supported bank SMS alerts and organizes your income and expenses in NPR — so you don&apos;t have to. 100% offline-first privacy.
            </p>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-green inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold"
              >
                <PlayStoreIcon className="w-5 h-5 text-white" />
                <span>Get the app on Google Play</span>
              </a>

              <a
                href="#features"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#059669] hover:text-[#047857] transition-colors py-3 px-2 group"
              >
                <span>See how it works</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>
            </div>

            {/* Light Perks list */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-[#475569] pt-3">
              <li className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>100% Free Forever</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>No Bank Passwords</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>On-Device Privacy</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ECFDF5] text-[#10B981]">
                  <CheckIcon className="w-3 h-3" />
                </span>
                <span>Smart Spending Analytics</span>
              </li>
            </ul>
          </div>

          {/* Right Column: 45% Sajilo Khata Dual Phone */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroAppMockup />
          </div>
        </div>

        {/* 3 Core Value Pillars */}
        <div className="mt-16 pt-10 border-t border-[#E6F4ED] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#E6F4ED] shadow-2xs hover:border-[#A7F3D0] transition-colors">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#059669] border border-[#D1FAE5]">
              <ZapIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-manrope text-base font-bold text-[#0F172A]">
                Automatic tracking
              </h3>
              <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                Reads your bank SMS messages and logs transactions for you.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#E6F4ED] shadow-2xs hover:border-[#A7F3D0] transition-colors">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#059669] border border-[#D1FAE5]">
              <MountainIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-manrope text-base font-bold text-[#0F172A]">
                Made for Nepal
              </h3>
              <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                Supports NPR currency, local bank alerts, and Fonepay QR.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#E6F4ED] shadow-2xs hover:border-[#A7F3D0] transition-colors">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#ECFDF5] text-[#059669] border border-[#D1FAE5]">
              <TargetIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-manrope text-base font-bold text-[#0F172A]">
                Your goals in view
              </h3>
              <p className="mt-1 text-sm text-[#475569] leading-relaxed">
                Track spending, save for your dreams, and build a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
