import {
  SmsIcon,
  TargetIcon,
  CloudOfflineIcon,
  LockClosedIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
  ArrowUpIcon,
  CheckIcon,
} from "./Icons";

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-[#F8FAF6] border-t border-[#E1E3DF]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Features Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="badge-sage-pill">
            Features
          </div>
          <h2 className="mt-4 font-sans text-3xl sm:text-5xl font-extrabold text-[#191C1A] tracking-[-0.02em]">
            Everything you need to <span className="gradient-text-moss">take control</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#434840]">
            Automatic tracking, smart savings goals, and visual spending analytics — engineered for Nepal.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Feature 1: Auto-Track Bank SMS (7 cols) */}
          <div className="lg:col-span-7 card-paper p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C] group-hover:scale-105 transition-transform">
                  <SmsIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl font-extrabold text-[#5A7853]/30">
                  01
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#425F3C] mb-1">
                Zero Manual Typing
              </div>
              <h3 className="font-sans text-2xl font-bold text-[#191C1A]">
                Auto-Track Bank SMS
              </h3>
              <p className="mt-3 text-sm text-[#434840] leading-relaxed max-w-lg">
                Sajilo Khata listens strictly for official bank alerts and instantly logs debit &amp; credit transactions with merchant tags and amounts in NPR.
              </p>
            </div>

            {/* Micro visual: Simulated SMS parsing strip */}
            <div className="mt-6 pt-4 border-t border-[#ECEEEA] flex items-center justify-between gap-3 bg-[#F2F4F0] rounded-2xl p-3.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="h-2 w-2 rounded-full bg-[#5A7853] shrink-0" />
                <span className="text-xs font-mono text-[#434840] truncate">
                  SMS &quot;Nabil Bank: Rs. 2,500 Dr. at Bhatbhateni&quot;
                </span>
              </div>
              <span className="shrink-0 rounded-full bg-[#FFFFFF] border border-[#C3C8BD] px-2.5 py-1 text-[11px] font-bold text-[#314E2C]">
                Logged &bull; Groceries
              </span>
            </div>
          </div>

          {/* Feature 2: Hero Green Botanical Gradient Chart Card (5 cols) */}
          <div className="lg:col-span-5 hero-moss-gradient rounded-[28px] p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl font-extrabold text-white/40">
                  02
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDFFD1] mb-1">
                Visual Analytics
              </div>
              <h3 className="font-sans text-2xl font-bold text-white">
                Spending Breakdown
              </h3>
              <p className="mt-2 text-sm text-white/85 leading-relaxed">
                Continuous area charts visualize weekly velocity and monthly categories.
              </p>
            </div>

            {/* Smooth Area Chart SVG with floating active obsidian tooltip pill */}
            <div className="relative mt-6 pt-2 select-none">
              {/* Floating Active Obsidian Tooltip */}
              <div className="absolute top-0 right-6 z-20 obsidian-surface rounded-full px-3 py-1.5 flex items-center gap-2 text-xs shadow-xl">
                <span className="font-bold text-white text-[11px]">रू 14,800</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-[#DDFFD1] text-[#062105] px-1.5 py-0.5 text-[10px] font-bold">
                  <ArrowUpIcon className="w-2.5 h-2.5" />
                  +2.46%
                </span>
              </div>

              {/* Area Chart Path */}
              <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80" fill="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 65 C 50 60, 80 40, 120 48 C 160 56, 190 20, 240 24 C 270 28, 290 12, 300 10 L 300 80 L 0 80 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0 65 C 50 60, 80 40, 120 48 C 160 56, 190 20, 240 24 C 270 28, 290 12, 300 10"
                  stroke="#D9E8D6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Active node */}
                <circle cx="240" cy="24" r="5" fill="#FFFFFF" stroke="#394835" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

          {/* Feature 3: Smart Savings Goals (4 cols) */}
          <div className="lg:col-span-4 card-paper p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C] group-hover:scale-105 transition-transform">
                  <TargetIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl font-extrabold text-[#5A7853]/30">
                  03
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#425F3C] mb-1">
                Daily Pacing Formula
              </div>
              <h3 className="font-sans text-xl font-bold text-[#191C1A]">
                Smart Savings Goals
              </h3>
              <p className="mt-3 text-sm text-[#434840] leading-relaxed">
                Set targets with deadlines for Dashain shopping or laptop upgrades. Get an automated daily savings pace.
              </p>
            </div>

            {/* Goal Progress Bar */}
            <div className="mt-6 pt-4 border-t border-[#ECEEEA]">
              <div className="flex justify-between text-xs font-bold text-[#191C1A] mb-1.5">
                <span>Dashain Travel</span>
                <span className="text-[#425F3C]">72%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#ECEEEA] overflow-hidden">
                <div className="h-full bg-[#5A7853] rounded-full w-[72%]" />
              </div>
            </div>
          </div>

          {/* Feature 4: Offline-First Hive Engine (4 cols) */}
          <div className="lg:col-span-4 card-paper p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C] group-hover:scale-105 transition-transform">
                  <CloudOfflineIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl font-extrabold text-[#5A7853]/30">
                  04
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#425F3C] mb-1">
                Works Without Data
              </div>
              <h3 className="font-sans text-xl font-bold text-[#191C1A]">
                Offline-First Hive Engine
              </h3>
              <p className="mt-3 text-sm text-[#434840] leading-relaxed">
                Travel anywhere across Nepal with complete confidence. Your data is stored locally in Hive DB and functions without internet.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECEEEA] flex items-center gap-2 text-xs font-bold text-[#425F3C]">
              <CheckIcon className="w-4 h-4 text-[#5A7853]" />
              <span>Zero network latency</span>
            </div>
          </div>

          {/* Feature 5: 100% On-Device Privacy (4 cols) */}
          <div className="lg:col-span-4 card-paper p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE5D8] text-[#314E2C] group-hover:scale-105 transition-transform">
                  <LockClosedIcon className="w-6 h-6" />
                </div>
                <span className="font-mono text-2xl font-extrabold text-[#5A7853]/30">
                  05
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#425F3C] mb-1">
                Zero Cloud Upload
              </div>
              <h3 className="font-sans text-xl font-bold text-[#191C1A]">
                100% On-Device Privacy
              </h3>
              <p className="mt-3 text-sm text-[#434840] leading-relaxed">
                Never enter bank passwords or OTPs. Personal family messages and two-factor codes are strictly filtered out and never transmitted.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ECEEEA] flex items-center gap-2 text-xs font-bold text-[#425F3C]">
              <CheckIcon className="w-4 h-4 text-[#5A7853]" />
              <span>No bank passwords required</span>
            </div>
          </div>

          {/* Feature 6: 1-Click CSV Excel Export (12 cols) */}
          <div className="lg:col-span-12 card-paper p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DDE5D8] text-[#314E2C]">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#425F3C]">
                  Audits &amp; Tax Filing
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#191C1A]">
                1-Click CSV &amp; Excel Export
              </h3>
              <p className="mt-2 text-sm text-[#434840] leading-relaxed">
                Export your complete transaction history to Excel or Google Sheets anytime for budgeting, audits, and business filings.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <span className="rounded-full bg-[#ECEEEA] border border-[#D8DBD7] px-3.5 py-1.5 text-xs font-semibold text-[#191C1A]">
                Microsoft Excel (.xlsx)
              </span>
              <span className="rounded-full bg-[#ECEEEA] border border-[#D8DBD7] px-3.5 py-1.5 text-xs font-semibold text-[#191C1A]">
                Google Sheets (.csv)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
