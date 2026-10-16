"use client";

import { useState } from "react";
import { FAQS, DEVELOPER } from "@/lib/constants";
import { ChevronDownIcon } from "./Icons";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F7FCF9] border-t border-[#E6F4ED]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full badge-light-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="mt-4 font-manrope text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Frequently asked <span className="gradient-text-emerald">questions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569]">
            Clear, transparent answers about how Sajilo Khata works, keeps your data safe, and automates your finances.
          </p>
        </div>

        {/* Minimal Accordion Cards */}
        <div className="mt-14 space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-[#E6F4ED] bg-white transition-all hover:border-[#A7F3D0] shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-emerald-50/20 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-manrope text-base sm:text-lg font-bold text-[#0F172A] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${isOpen ? "rotate-180 bg-[#10B981] text-white" : "bg-[#F0FDF4] text-[#059669] border border-[#D1FAE5]"
                      }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#475569] leading-relaxed border-t border-[#E6F4ED] pt-4 bg-[#F0FDF4]/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Developer Contact Notice */}
        <div className="mt-12 text-center rounded-2xl border border-[#E6F4ED] bg-white p-6 shadow-2xs">
          <p className="text-sm font-bold text-[#0F172A]">
            Have a question or request for custom cooperative bank regex?
          </p>
          <p className="text-xs text-[#475569] mt-1">
            Reach out to developer {DEVELOPER.name} directly at{" "}
            <a
              href={`mailto:${DEVELOPER.email}`}
              className="text-[#059669] font-bold underline underline-offset-2 hover:text-[#047857]"
            >
              {DEVELOPER.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
