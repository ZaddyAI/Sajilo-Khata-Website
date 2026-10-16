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
    <section className="relative overflow-hidden pt-6 pb-20 lg:pt-10 lg:pb-28 botanical-canvas-gradient">
      {/* Botanical Ambient Orbs */}
      <div className="ambient-orb ambient-orb-moss" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-sage" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-coral" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: 58% */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="badge-sage-pill">
              <NepalFlagIcon className="w-3.5 h-3.5" />
              <span>MADE FOR YOUR MONEY, MADE FOR NEPAL</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-[58px] font-extrabold tracking-[-0.03em] leading-[1.08] text-[#191C1A]">
              Your money, <br />
              <span className="gradient-text-moss">understood</span>. <br />
              Automatically.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-[17px] text-[#434840] leading-relaxed max-w-lg">
              Sajilo Khata listens strictly for official bank SMS alerts and organizes your income and expenses in NPR — so you don&apos;t have to. 100% offline-first privacy.
            </p>

            {/* Hero Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-obsidian"
              >
                <PlayStoreIcon className="w-5 h-5 text-white" />
                <span>Get the app on Google Play</span>
              </a>

              <a
                href="#features"
                className="btn-pill-subtle group"
              >
                <span>See how it works</span>
                <span className="group-hover:translate-y-0.5 transition-transform text-[#5A7853]">↓</span>
              </a>
            </div>

            {/* Perks list */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-[#596056] pt-2">
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDE5D8] text-[#314E2C]">
                  <CheckIcon className="w-2.5 h-2.5" />
                </span>
                <span>100% Free Forever</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDE5D8] text-[#314E2C]">
                  <CheckIcon className="w-2.5 h-2.5" />
                </span>
                <span>No Bank Passwords</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDE5D8] text-[#314E2C]">
                  <CheckIcon className="w-2.5 h-2.5" />
                </span>
                <span>On-Device Privacy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DDE5D8] text-[#314E2C]">
                  <CheckIcon className="w-2.5 h-2.5" />
                </span>
                <span>Smart Spending Analytics</span>
              </li>
            </ul>
          </div>

          {/* Right Column: 42% Sajilo Khata Dual Phone */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroAppMockup />
          </div>
        </div>

        {/* 3 Core Value Pillars (Paper Cards) */}
        <div className="mt-16 pt-10 border-t border-[#E1E3DF] grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-paper p-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C]">
              <ZapIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-[#191C1A]">
                Automatic tracking
              </h3>
              <p className="mt-1 text-sm text-[#596056] leading-relaxed">
                Reads your bank SMS messages and logs transactions for you.
              </p>
            </div>
          </div>

          <div className="card-paper p-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C]">
              <MountainIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-[#191C1A]">
                Made for Nepal
              </h3>
              <p className="mt-1 text-sm text-[#596056] leading-relaxed">
                Supports NPR currency, local bank alerts, and Fonepay QR.
              </p>
            </div>
          </div>

          <div className="card-paper p-5 flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C]">
              <TargetIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-sans text-base font-bold text-[#191C1A]">
                Your goals in view
              </h3>
              <p className="mt-1 text-sm text-[#596056] leading-relaxed">
                Track spending, save for your dreams, and build a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
