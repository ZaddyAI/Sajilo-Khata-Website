"use client";

import { useState } from "react";
import Image from "next/image";
import { ZapIcon, NepalFlagIcon, ArrowUpIcon } from "./Icons";

export default function HeroAppMockup() {
  const [activeFront, setActiveFront] = useState<"dashboard" | "log">("dashboard");

  return (
    <div className="relative w-full max-w-[480px] py-4 select-none flex flex-col items-center">
      {/* Verdant Sol Segmented Pill Toggle */}
      <div className="mb-4 z-30">
        <div className="segmented-pill-track p-1 shadow-2xs">
          <button
            onClick={() => setActiveFront("dashboard")}
            className={`px-4 py-1.5 text-xs rounded-full transition-all duration-200 ${activeFront === "dashboard"
              ? "segmented-pill-item-active"
              : "segmented-pill-item-inactive"
              }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveFront("log")}
            className={`px-4 py-1.5 text-xs rounded-full transition-all duration-200 ${activeFront === "log"
              ? "segmented-pill-item-active"
              : "segmented-pill-item-inactive"
              }`}
          >
            SMS Live Feed
          </button>
        </div>
      </div>

      {/* Dual Phone Display Container */}
      <div className="relative w-full aspect-[440/560] sm:aspect-[460/580] flex items-center justify-center">
        {/* Background Phone */}
        <div
          onClick={() => setActiveFront(activeFront === "dashboard" ? "log" : "dashboard")}
          className={`absolute left-2 sm:left-4 bottom-6 sm:bottom-8 transition-all duration-500 cursor-pointer ${activeFront === "dashboard"
            ? "z-10 opacity-90 hover:opacity-100 animate-hero-phone-2"
            : "z-20 opacity-100 animate-hero-phone-1"
            }`}
          style={{ willChange: "transform" }}
          title="Click to bring screen forward"
        >
          <div className="phone-mockup-frame w-[205px] sm:w-[235px]">
            <div className="phone-screen-inner">
              <Image
                src={activeFront === "dashboard" ? "/screenshots/ledger.png" : "/screenshots/dashboard.png"}
                alt="Sajilo Khata Screen"
                width={454}
                height={978}
                priority
                className="select-none pointer-events-none object-contain"
              />
            </div>
          </div>
        </div>

        {/* Foreground Phone */}
        <div
          onClick={() => setActiveFront(activeFront === "dashboard" ? "log" : "dashboard")}
          className={`relative ml-[22%] transition-all duration-500 cursor-pointer ${activeFront === "dashboard"
            ? "z-20 opacity-100 animate-hero-phone-1"
            : "z-10 opacity-90 hover:opacity-100 animate-hero-phone-2"
            }`}
          style={{ willChange: "transform" }}
          title="Click to switch screens"
        >
          <div className="phone-mockup-frame w-[245px] sm:w-[275px]">
            <div className="phone-screen-inner">
              <Image
                src={activeFront === "dashboard" ? "/screenshots/dashboard.png" : "/screenshots/ledger.png"}
                alt="Sajilo Khata Screen"
                width={454}
                height={978}
                priority
                className="select-none pointer-events-none object-contain"
              />
            </div>
          </div>
        </div>

        {/* Floating Obsidian Pill A (Top Right - Bank SMS Auto-Parse Tag) */}
        <div className="obsidian-surface rounded-full px-3.5 py-2 absolute top-6 sm:top-10 -right-2 sm:-right-4 z-30 flex items-center gap-2 text-xs shadow-xl animate-float-soft">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5A7853] text-[#DDFFD1]">
            <ZapIcon className="w-3 h-3" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-[#EFF1ED]">
            Auto-parsed: <b className="text-[#DDFFD1] font-bold">Nabil Rs. 2,500 Dr.</b>
          </span>
        </div>

        {/* Floating Tactile Card Pill B (Bottom Left - Net Balance & Trend Tag) */}
        <div className="floating-status-pill absolute bottom-1 sm:bottom-4 -left-2 sm:-left-4 z-30">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DDE5D8] text-[#314E2C] p-0.5">
            <NepalFlagIcon className="w-3.5 h-3.5" />
          </span>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
            <span className="text-[#596056]">Net:</span>
            <b className="text-[#191C1A] font-extrabold tracking-tight">रू 84,250.00</b>
            <span className="inline-flex items-center gap-0.5 rounded-full bg-[#DDFFD1] text-[#062105] px-1.5 py-0.5 text-[10px] font-bold">
              <ArrowUpIcon className="w-2.5 h-2.5" />
              2.4%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
