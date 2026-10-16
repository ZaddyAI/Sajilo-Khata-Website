"use client";

import { useState } from "react";
import Image from "next/image";
import { ZapIcon, NepalFlagIcon } from "./Icons";

export default function HeroAppMockup() {
  const [activeFront, setActiveFront] = useState<"dashboard" | "log">("dashboard");

  return (
    <div className="relative w-full max-w-[460px] py-6 select-none flex items-center justify-center">
      {/* Container */}
      <div className="relative w-full aspect-[440/560] sm:aspect-[460/580] flex items-center justify-center">
        {/* Background Phone */}
        <div
          onClick={() => setActiveFront(activeFront === "dashboard" ? "log" : "dashboard")}
          className={`absolute left-0 bottom-6 sm:bottom-8 transition-all duration-500 cursor-pointer ${activeFront === "dashboard"
            ? "z-10 opacity-90 hover:opacity-100 animate-hero-phone-2"
            : "z-20 opacity-100 animate-hero-phone-1"
            }`}
          style={{ willChange: "transform" }}
          title="Click to bring forward"
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
          title="Click to toggle front screen"
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

        {/* Floating Chip A (Top Right - Bank SMS detected) */}
        <div className="floating-chip absolute top-2 sm:top-6 -right-2 sm:-right-4 z-30">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFDF5] text-[#059669]">
            <ZapIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-[11px] sm:text-xs">
            Auto-parsed: <b className="text-[#059669]">Nabil Rs. 2,500 Dr.</b>
          </span>
        </div>

        {/* Floating Chip B (Bottom Left - Net Balance) */}
        <div className="floating-chip absolute bottom-0 sm:bottom-3 -left-3 sm:-left-6 z-30">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFDF5] p-0.5">
            <NepalFlagIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-[11px] sm:text-xs">
            Net Balance: <b className="text-[#059669]">रू 84,250.00</b>
          </span>
        </div>
      </div>
    </div>
  );
}
