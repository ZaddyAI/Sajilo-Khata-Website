import Image from "next/image";
import { APP_NAME, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, CheckIcon, GithubIcon } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-[#F8FAF6] border-t border-[#E1E3DF] relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero-moss-gradient-card rounded-[32px] p-8 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden text-white shadow-2xl">
          {/* Subtle botanical ambient glow inside card */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#7E9F76]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#394835]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex justify-center">
              <div className="p-1.5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 shadow-lg">
                <Image
                  src={LOGO}
                  alt="Sajilo Khata App Icon"
                  width={68}
                  height={68}
                  className="h-16 w-16 rounded-xl overflow-hidden object-contain"
                />
              </div>
            </div>

            <div className="badge-frosted-pill">
              100% Free for Nepal
            </div>

            <h2 className="mt-5 font-sans text-3xl sm:text-5xl font-extrabold text-white tracking-[-0.02em] leading-tight">
              Take control of your <br className="hidden sm:inline" />
              <span className="text-[#DDFFD1]">finances today.</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-white/90 leading-relaxed">
              Join thousands of Nepali users who have stopped stressing about where their money went. Download {APP_NAME} and let bank SMS do the accounting.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-white w-full sm:w-auto"
              >
                <PlayStoreIcon className="w-5 h-5 text-[#1B221A]" />
                <span>Get the app on Google Play</span>
              </a>

              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-glass w-full sm:w-auto"
              >
                <GithubIcon className="w-4 h-4 text-white" />
                <span>Explore on GitHub</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/80">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#DDFFD1]" />
                Android 8.0+
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#DDFFD1]" />
                Under 15MB Size
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#DDFFD1]" />
                Offline-Ready
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#DDFFD1]" />
                No Ads / Free Forever
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
