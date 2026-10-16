import { SmartphoneIcon, ShieldCheckIcon, ChartBarIcon, CheckIcon } from "./Icons";

const steps = [
  {
    step: "01",
    badge: "15 Seconds",
    title: "Download & Open App",
    description:
      "Get Sajilo Khata free from Google Play (under 15MB). Sign in with Google for encrypted cloud backup, or continue completely offline in guest mode.",
    icon: <SmartphoneIcon className="w-6 h-6 text-[#129671]" />,
    features: ["Under 15MB download size", "Google Sign-In or Offline Guest Mode", "Zero banking passwords required"],
  },
  {
    step: "02",
    badge: "Permission",
    title: "Select Bank Senders",
    description:
      "Grant SMS read permission. The on-device engine searches only for verified bank and wallet senders (Nabil, NIMB, NIC Asia, Global IME, eSewa). Private messages and OTPs are never read.",
    icon: <ShieldCheckIcon className="w-6 h-6 text-[#129671]" />,
    features: ["Zero cloud SMS transmission", "Encrypted local device storage", "Select or unselect any bank sender"],
  },
  {
    step: "03",
    badge: "Automatic",
    title: "Spend, Save & Grow in NPR",
    description:
      "Every time you make a Fonepay QR payment, swipe an ATM card, or receive your monthly salary, Sajilo Khata automatically parses the transaction and updates your categorized transaction ledger.",
    icon: <ChartBarIcon className="w-6 h-6 text-[#129671]" />,
    features: ["Real-time debit/credit logging", "12 Nepali category assignments", "Daily savings goal pace updates"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#FAF9F5] border-t border-[#E8E9E2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full badge-mint px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="mt-4 font-manrope text-3xl sm:text-5xl font-extrabold text-[#202923] tracking-tight">
            Up &amp; running in <span className="text-[#0E7D5E]">3 simple steps.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#607873]">
            No complex setup. No manual data entry. Just install, select your bank, and let Sajilo Khata do the rest.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="card-ivory p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D8F3E8]">
                    {item.icon}
                  </div>
                  <span className="font-manrope text-4xl font-extrabold text-[#E8E9E2] number-display">
                    {item.step}
                  </span>
                </div>

                <span className="rounded-full bg-[#E7F4EE] px-3 py-1 text-[11px] font-bold text-[#0E7D5E] uppercase tracking-wider">
                  {item.badge}
                </span>

                <h3 className="mt-4 font-manrope text-xl font-bold text-[#202923]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#607873] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#E8E9E2] space-y-2">
                {item.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs text-[#202923]">
                    <CheckIcon className="w-3.5 h-3.5 text-[#129671] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
