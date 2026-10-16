import Image from "next/image";
import { APP_NAME, LINKS, LOGO } from "@/lib/constants";
import { PlayStoreIcon, CheckIcon, GithubIcon } from "./Icons";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#FAF9F5] border-t border-[#E8E9E2] relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#D8F3E8] bg-gradient-to-br from-[#F8F7F2] via-[#F0F5ED] to-[#E7F4EE] p-8 sm:p-16 shadow-dashboard-frame text-center max-w-4xl mx-auto">
          <div className="mx-auto mb-6 flex justify-center">
            <Image
              src={LOGO}
              alt="Sajilo Khata App Icon"
              width={72}
              height={72}
              className="h-16 w-16 rounded-2xl shadow-md object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full badge-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            100% Free for Nepal
          </div>

          <h2 className="mt-5 font-manrope text-3xl sm:text-5xl font-extrabold text-[#202923] tracking-tight leading-tight">
            Take control of your <br className="hidden sm:inline" />
            <span className="text-[#0E7D5E]">finances today.</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-base sm:text-lg text-[#607873] leading-relaxed">
            Join thousands of Nepali users who have stopped stressing about where their money went. Download {APP_NAME} and let bank SMS do the accounting.
          </p>

          {/* Action buttons (Rating removed) */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-forest inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-bold shadow-md"
            >
              <PlayStoreIcon className="w-5 h-5" />
              <span>Get the app on Google Play</span>
            </a>

            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-mint inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold"
            >
              <GithubIcon className="w-4 h-4 text-[#129671]" />
              <span>Explore on GitHub</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[#607873]">
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-[#129671]" />
              Android 8.0+
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-[#129671]" />
              Under 15MB Size
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-[#129671]" />
              Offline-Ready
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-[#129671]" />
              No Ads / Free Forever
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
