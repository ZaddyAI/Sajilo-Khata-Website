import Link from "next/link";
import Image from "next/image";
import {
  APP_NAME,
  AUTHOR,
  LINKS,
  LOGO,
  SUPPORTED_BANKS,
  STATS,
} from "@/lib/constants";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "SMS Auto-Reader",
    description:
      "Automatically reads bank SMS on Android. Supports NIMB, NIC Asia, ADB, Nabil, Laxmi Sunrise, and more.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Smart Dashboard",
    description:
      "Monthly summaries with pie charts and bar graphs. See your spending breakdown at a glance.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Savings Goals",
    description:
      "Set targets with deadlines, track progress with daily savings recommendations, and celebrate when you achieve them.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: "Offline-First Sync",
    description:
      "Works without internet using Hive local cache. Data syncs to Firebase when you're back online.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Secure & Private",
    description:
      "Firebase Auth with Google Sign-In. Your data lives under your account — no one else can access it.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
    title: "Export & Share",
    description:
      "Export transactions as CSV and share via any app. Perfect for sharing with accountants or family.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "Smart Notifications",
    description:
      "Get alerts when transactions are auto-logged, budget limits are hit, or savings goals are achieved.",
  },
];

const steps = [
  {
    step: "01",
    title: "Install & Sign Up",
    description:
      "Download Sajilo Khata from the Play Store. Sign in with Google or email in seconds.",
  },
  {
    step: "02",
    title: "Grant SMS Permission",
    description:
      "Allow SMS reading permission. The app only reads bank transaction SMS — never reads personal messages.",
  },
  {
    step: "03",
    title: "Let It Work",
    description:
      "Transactions are auto-logged as bank SMS arrives. Add manual entries anytime. Set savings goals.",
  },
];

const screenshots = [
  {
    title: "Smart Dashboard",
    desc: "Monthly income, expenses, and net balance at a glance with interactive charts.",
    image: "/screenshots/dashboard.png",
    alt: "Smart Dashboard showing monthly summary",
  },
  {
    title: "SMS Auto-Tracking",
    desc: "Bank SMS is parsed automatically. Every transaction is logged without lifting a finger.",
    image: "/screenshots/sms-tracking.png",
    alt: "SMS auto-tracking permission screen",
  },
  {
    title: "Savings Goals",
    desc: "Set targets, track progress, and get daily savings recommendations to stay on track.",
    image: "/screenshots/goals.png",
    alt: "Savings goals overview screen",
  },
  {
    title: "Transaction Ledger",
    desc: "Full list with filters. Debit in red, credit in green. Search by bank, category, or date.",
    image: "/screenshots/ledger.png",
    alt: "Transaction ledger list screen",
  },
  {
    title: "Profile & Settings",
    desc: "Manage your profile, SMS senders, sync status, and notification preferences.",
    image: "/screenshots/profile.png",
    alt: "Profile and settings screen",
  },
  {
    title: "Add Transaction",
    desc: "Quickly add income or expense entries with categories, notes, and bank tags.",
    image: "/screenshots/add-transaction.png",
    alt: "Add new transaction screen",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 glass-strong border-b border-white/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={LOGO}
              alt="Sajilo Khata"
              width={40}
              height={40}
              className="rounded-xl"
              priority
            />
            <span className="text-xl font-bold text-primary font-manrope tracking-tight">
              {APP_NAME}
            </span>
          </Link>
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#features"
              className="rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-low hover:text-primary transition-all"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-low hover:text-primary transition-all"
            >
              How It Works
            </a>
            <a
              href="#screenshots"
              className="rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-low hover:text-primary transition-all"
            >
              Screenshots
            </a>
            <Link
              href={LINKS.privacy}
              className="rounded-lg px-4 py-2 text-sm font-medium text-on-surface-variant hover:bg-surface-low hover:text-primary transition-all"
            >
              Privacy Policy
            </Link>
          </div>
          <a
            href={LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary-container px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary transition-all hover:shadow-lg hover:shadow-primary-container/20"
          >
            Get the App
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-center md:py-36">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-medium text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            Made for Nepal
          </div>
          <div className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40">
            <Image
              src={LOGO}
              alt="Sajilo Khata Logo"
              width={160}
              height={160}
              className="w-full h-full drop-shadow-xl"
              priority
            />
          </div>
          <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-on-surface font-manrope md:text-7xl">
            Track Every Rupee.
            <br />
            <span className="gradient-text">Automatically.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
            {APP_NAME} reads your bank SMS and logs income &amp; expenses
            automatically. Set savings goals, visualize spending, and take
            control of your finances — all in NPR.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={LINKS.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-primary-container px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary-container/25 transition-all hover:bg-primary hover:shadow-2xl hover:shadow-primary-container/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Download for Android
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
            <a
              href="#features"
              className="rounded-2xl border border-outline-variant/60 bg-white/60 px-8 py-4 text-base font-semibold text-on-surface backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white hover:text-primary hover:shadow-lg"
            >
              See Features
            </a>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-20 grid max-w-lg grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary font-manrope number-display">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-on-surface-variant">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorations */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-primary-container/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      </section>

      {/* Features Section */}
      <section id="features" className="bg-surface-lowest py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-container/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-container">
              Features
            </span>
            <h2 className="mt-4 text-3xl font-bold font-manrope md:text-5xl">
              Everything you need to{" "}
              <span className="gradient-text">manage money</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-on-surface-variant">
              From automatic SMS tracking to savings goals, {APP_NAME} gives
              you the tools to take control of your finances.
            </p>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-outline-variant/30 bg-white p-6 transition-all duration-300 hover:border-primary/20 hover-lift card-shadow"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/8 text-primary-container transition-colors group-hover:bg-primary-container group-hover:text-white">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-base font-semibold font-manrope text-on-surface">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/3 via-surface to-secondary/3" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-bold font-manrope md:text-5xl">
              Up and running in{" "}
              <span className="gradient-text">3 simple steps</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-on-surface-variant">
              No complex setup. No manual data entry. Just install, grant
              permission, and let {APP_NAME} do the rest.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute top-8 left-[60%] hidden h-px w-[80%] bg-gradient-to-r from-outline-variant to-transparent md:block" />
                )}
                <div className="relative mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container text-xl font-bold text-white font-manrope shadow-lg shadow-primary-container/20">
                  {step.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold font-manrope">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="bg-surface-lowest py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-container/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-container">
              App Preview
            </span>
            <h2 className="mt-4 text-3xl font-bold font-manrope md:text-5xl">
              Built for{" "}
              <span className="gradient-text">real Nepali life</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-on-surface-variant">
              Clean, intuitive design that makes tracking money effortless.
            </p>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-2xl border border-outline-variant/30 bg-white transition-all duration-300 hover-lift card-shadow"
              >
                <div className="relative overflow-hidden bg-surface-low">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-base font-semibold font-manrope text-on-surface">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Banks */}
      <section className="py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface to-surface-low" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
            Compatibility
          </span>
          <h2 className="mt-4 text-3xl font-bold font-manrope md:text-5xl">
            Supports{" "}
            <span className="gradient-text">major Nepal banks</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-on-surface-variant">
            Our SMS parser works with all major banks and digital wallets in
            Nepal.
          </p>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {SUPPORTED_BANKS.map((bank) => (
              <div
                key={bank}
                className="glass rounded-xl px-5 py-4 text-sm font-medium text-on-surface card-shadow transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,6,102,0.2),transparent_50%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-3xl font-bold text-white font-manrope md:text-5xl">
            Start tracking your money today
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Join thousands of Nepali users who have taken control of their
            finances with {APP_NAME}.
          </p>
          <a
            href={LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-2xl bg-white px-10 py-4 text-lg font-semibold text-primary-container shadow-xl shadow-black/10 transition-all hover:bg-surface hover:shadow-2xl hover:scale-105"
          >
            Download Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant/30 bg-surface-lowest">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src={LOGO}
                  alt="Sajilo Khata"
                  width={36}
                  height={36}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold text-primary font-manrope">
                  {APP_NAME}
                </span>
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
                {APP_NAME} is a product of {AUTHOR.name}.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-on-surface font-manrope">
                Product
              </h4>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li>
                  <a href="#features" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-primary transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#screenshots" className="hover:text-primary transition-colors">
                    Screenshots
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-on-surface font-manrope">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-on-surface-variant">
                <li>
                  <Link href={LINKS.privacy} className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={LINKS.terms} className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-on-surface font-manrope">
                Built by
              </h4>
              <a
                href={AUTHOR.website}
                className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/redpixellabs.png"
                  alt="RedPixel Labs"
                  width={120}
                  height={28}
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>
          <div className="mt-12 border-t border-outline-variant/30 pt-8 text-center text-sm text-outline">
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
