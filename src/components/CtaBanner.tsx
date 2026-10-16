import Image from "next/image";
import { APP_NAME, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, CheckIcon, GithubIcon } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-white border-t border-[#E6F4ED] relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#D1FAE5] bg-gradient-to-br from-white via-[#F0FDF4] to-[#ECFDF5] p-8 sm:p-16 shadow-[0_20px_50px_-15px_rgba(16,185,129,0.15)] text-center max-w-4xl mx-auto relative overflow-hidden">
          {/* Subtle decorative orb */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex justify-center">
              <Image
                src={LOGO}
                alt="Sajilo Khata App Icon"
                width={72}
                height={72}
                className="h-16 w-16 rounded-2xl shadow-md object-contain"
              />
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full badge-light-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              100% Free for Nepal
            </div>

            <h2 className="mt-5 font-manrope text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
              Take control of your <br className="hidden sm:inline" />
              <span className="gradient-text-emerald">finances today.</span>
            </h2>

            <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#475569] leading-relaxed">
              Join thousands of Nepali users who have stopped stressing about where their money went. Download {APP_NAME} and let bank SMS do the accounting.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LINKS.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-green inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold"
              >
                <PlayStoreIcon className="w-5 h-5 text-white" />
                <span>Get the app on Google Play</span>
              </a>

              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-light inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold"
              >
                <GithubIcon className="w-4 h-4 text-[#059669]" />
                <span>Explore on GitHub</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#475569]">
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#10B981]" />
                Android 8.0+
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#10B981]" />
                Under 15MB Size
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#10B981]" />
                Offline-Ready
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="w-4 h-4 text-[#10B981]" />
                No Ads / Free Forever
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
