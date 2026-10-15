import {
  SmsIcon,
  TargetIcon,
  CloudOfflineIcon,
  LockClosedIcon,
  ArrowDownTrayIcon,
  ChartBarIcon,
} from "./Icons";

const features = [
  {
    num: "01",
    icon: <SmsIcon className="w-6 h-6 text-[#145C45]" />,
    title: "Auto-Track Bank SMS",
    tagline: "Zero Manual Typing",
    description:
      "Sajilo Khata listens strictly for official bank alerts and instantly logs debit & credit transactions with merchant tags and amounts.",
    span: "lg:col-span-7",
    bg: "bg-white",
  },
  {
    num: "02",
    icon: <ChartBarIcon className="w-6 h-6 text-[#145C45]" />,
    title: "Spending Breakdown",
    tagline: "Visual Analytics",
    description:
      "Interactive charts break down your spending across Groceries, Dining, Rent, and Utilities with instant monthly summaries.",
    span: "lg:col-span-5",
    bg: "bg-[#F0F5ED]",
  },
  {
    num: "03",
    icon: <TargetIcon className="w-6 h-6 text-[#145C45]" />,
    title: "Smart Savings Goals",
    tagline: "Daily Pacing Formula",
    description:
      "Set targets with deadlines for Dashain shopping, bike upgrades, or laptops. Get an automated daily savings pace.",
    span: "lg:col-span-4",
    bg: "bg-[#F0F5ED]",
  },
  {
    num: "04",
    icon: <CloudOfflineIcon className="w-6 h-6 text-[#145C45]" />,
    title: "Offline-First Hive Engine",
    tagline: "Works Without Data",
    description:
      "Travel anywhere across Nepal with complete confidence. Your data is stored locally in Hive DB and functions without internet.",
    span: "lg:col-span-4",
    bg: "bg-white",
  },
  {
    num: "05",
    icon: <LockClosedIcon className="w-6 h-6 text-[#145C45]" />,
    title: "100% On-Device Privacy",
    tagline: "Zero Cloud Upload",
    description:
      "Never enter bank passwords or OTPs. Personal family messages and two-factor codes are strictly filtered out and never transmitted.",
    span: "lg:col-span-4",
    bg: "bg-[#F0F5ED]",
  },
  {
    num: "06",
    icon: <ArrowDownTrayIcon className="w-6 h-6 text-[#145C45]" />,
    title: "1-Click CSV Excel Export",
    tagline: "Audits & Tax Filing",
    description:
      "Export your complete transaction history to Excel or Google Sheets anytime for budgeting, audits, and business filings.",
    span: "lg:col-span-12",
    bg: "bg-white",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 bg-[#F8F7F2] border-t border-[#E8E9E2]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Features Head */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-wider text-[#145C45]">
            Features
          </p>
          <h2 className="mt-3 font-manrope text-3xl sm:text-5xl font-extrabold text-[#202923] tracking-tight">
            Everything you need to <span className="text-[#08634D]">take control</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#607873]">
            Automatic tracking, smart savings goals, and visual spending analytics — engineered for Nepal.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className={`${feat.span} ${feat.bg} rounded-3xl border border-[#E8E9E2] p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8F3E8] group-hover:scale-105 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="font-mono text-2xl font-extrabold text-[#145C45]/30">
                    {feat.num}
                  </span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#145C45] mb-1">
                  {feat.tagline}
                </div>
                <h3 className="font-manrope text-xl font-bold text-[#202923]">
                  {feat.title}
                </h3>
                <p className="mt-3 text-sm text-[#607873] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
