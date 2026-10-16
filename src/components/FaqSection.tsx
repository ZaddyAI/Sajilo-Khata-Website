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
    <section id="faq" className="py-24 bg-[#F8FAF6] border-t border-[#E1E3DF]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="badge-sage-pill">
            FAQ
          </div>
          <h2 className="mt-4 font-sans text-3xl sm:text-5xl font-extrabold text-[#191C1A] tracking-[-0.02em]">
            Frequently asked <span className="gradient-text-moss">questions.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#434840]">
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
                className="overflow-hidden rounded-2xl border border-[#E7E9E5] bg-white transition-all hover:border-[#C3C8BD] shadow-2xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-[#F2F4F0]/50 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-base sm:text-lg font-bold text-[#191C1A] pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${isOpen
                        ? "rotate-180 bg-[#1B221A] text-white"
                        : "bg-[#ECEEEA] text-[#314E2C] border border-[#D8DBD7]"
                      }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#434840] leading-relaxed border-t border-[#ECEEEA] pt-4 bg-[#F2F4F0]/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Developer Contact Notice */}
        <div className="mt-12 text-center card-paper p-6">
          <p className="text-sm font-bold text-[#191C1A]">
            Have a question or request for custom cooperative bank regex?
          </p>
          <p className="text-xs text-[#596056] mt-1">
            Reach out to developer {DEVELOPER.name} directly at{" "}
            <a
              href={`mailto:${DEVELOPER.email}`}
              className="text-[#425F3C] font-bold underline underline-offset-2 hover:text-[#314E2C]"
            >
              {DEVELOPER.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
