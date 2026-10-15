"use client";

import { useState } from "react";
import { SUPPORTED_BANKS_LIST } from "@/lib/constants";
import { CheckIcon, SearchIcon, XMarkIcon } from "./Icons";

export default function SupportedBanksSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "commercial" | "development" | "wallet">("all");

  const filteredBanks = SUPPORTED_BANKS_LIST.filter((bank) => {
    const matchesSearch =
      bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.shortName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.code.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || bank.category === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section id="banks" className="py-24 bg-[#FAF9F5] border-t border-[#E8E9E2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full badge-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            Compatibility
          </div>
          <h2 className="mt-4 font-manrope text-3xl sm:text-5xl font-extrabold text-[#202923] tracking-tight">
            Supported <span className="text-[#08634D]">Nepal banks &amp; wallets.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#607873]">
            Fine-tuned for Nepal’s banking SMS formats across Nabil, NIMB, NIC Asia, Global IME, eSewa, and more.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your bank (e.g. Nabil, NIMB, NIC Asia, Global IME, eSewa)..."
                className="w-full rounded-full border border-[#E8E9E2] bg-white px-5 py-3.5 pl-11 text-sm text-[#202923] placeholder-slate-400 focus:border-[#145C45] focus:outline-none focus:ring-2 focus:ring-[#D8F3E8] shadow-2xs transition-all"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <SearchIcon className="w-4 h-4" />
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear search"
                >
                  <XMarkIcon className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter Pills */}
            <div className="flex gap-1.5 shrink-0">
              {[
                { id: "all", label: "All" },
                { id: "commercial", label: "Commercial" },
                { id: "wallet", label: "Wallets" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilterType(btn.id as typeof filterType)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${filterType === btn.id
                    ? "bg-[#145C45] text-white shadow-2xs"
                    : "border border-[#E8E9E2] bg-white text-[#607873] hover:border-[#145C45]"
                    }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Banks Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBanks.map((bank) => (
            <div
              key={bank.code}
              className="group relative flex items-center justify-between rounded-2xl border border-[#E8E9E2] bg-white p-4 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-[#145C45]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D8F3E8] font-manrope font-extrabold text-xs text-[#08634D]">
                  {bank.shortName.slice(0, 3).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-manrope text-xs sm:text-sm font-bold text-[#202923] group-hover:text-[#145C45] transition-colors">
                    {bank.shortName}
                  </h3>
                  <p className="text-[10px] text-[#607873] uppercase tracking-wider capitalize">
                    {bank.category}
                  </p>
                </div>
              </div>

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E7F4EE] text-[#145C45] text-xs font-bold" title="Verified & Supported">
                <CheckIcon className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>

        {filteredBanks.length === 0 && (
          <div className="mt-8 text-center rounded-2xl border border-dashed border-[#E8E9E2] bg-white p-8 text-[#607873]">
            <p className="text-sm font-semibold">No bank found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-400 mt-1">
              Have a cooperative or bank not listed? Sajilo Khata allows custom SMS sender rules inside settings!
            </p>
          </div>
        )}

        {/* Custom sender notice */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-[#D8F3E8] bg-[#E7F4EE] p-5 text-center">
          <h4 className="text-xs font-bold text-[#08634D] uppercase tracking-wider">
            Custom Senders Whitelist
          </h4>
          <p className="mt-1 text-xs text-[#202923] leading-relaxed">
            Have an account with a local cooperative or microfinance? Sajilo Khata includes an in-app <strong className="text-[#145C45]">&quot;Custom SMS Senders&quot;</strong> whitelist manager.
          </p>
        </div>
      </div>
    </section>
  );
}
