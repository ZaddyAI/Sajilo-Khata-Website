"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "./Icons";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
      setShowScrollTop(totalScroll > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Top botanical progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-[#DDE5D8]/60">
        <div
          className="h-full bg-gradient-to-r from-[#7E9F76] via-[#5A7853] to-[#394835] transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating scroll to top obsidian pebble button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#1B221A] text-white shadow-xl border border-white/15 transition-all duration-200 hover:bg-[#2E312F] hover:scale-105 focus:outline-none"
        >
          <span className="rotate-180">
            <ChevronDownIcon className="w-5 h-5 text-white" />
          </span>
        </button>
      )}
    </>
  );
}
