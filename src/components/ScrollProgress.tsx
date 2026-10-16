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
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-[#D8F3E8]/40">
        <div
          className="h-full bg-gradient-to-r from-[#0E7D5E] via-[#129671] to-[#16866B] transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#129671] shadow-lg border border-[#E8E9E2] transition-all duration-200 hover:bg-[#129671] hover:text-white hover:scale-105 focus:outline-none"
        >
          <span className="rotate-180">
            <ChevronDownIcon className="w-5 h-5" />
          </span>
        </button>
      )}
    </>
  );
}
