export const APP_NAME = "Sajilo Khata";
export const APP_TAGLINE = "Your money, understood. Automatically.";
export const APP_DESCRIPTION =
  "Sajilo Khata reads supported bank SMS alerts and organizes your income and expenses in NPR — so you don't have to. Built for Nepal with 100% offline-first privacy and smart category analytics.";

export const LOGO = "/sajilo_khata_logo.png";
export const BANNER = "/sajilokhata banner.png";

// Developer & Contact Constants (centralized)
export const DEVELOPER = {
  name: "Gambhir Poudel",
  role: "Independent Developer",
  email: "gambhir.poudel@gmail.com",
  website: "https://gambhirpoudel.com.np",
  location: "Nepal",
};

export const AUTHOR = DEVELOPER;

export const LINKS = {
  playStore: "https://play.google.com/store/apps/details?id=com.zaddyai.sajilokhata",
  github: "https://github.com/gambhirpoudel/sajilo-khata",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  email: `mailto:${DEVELOPER.email}`,
  website: DEVELOPER.website,
};

export interface BankInfo {
  name: string;
  code: string;
  shortName: string;
  category: "commercial" | "development" | "wallet";
}

export const SUPPORTED_BANKS_LIST: BankInfo[] = [
  { name: "Nabil Bank", code: "NABIL", shortName: "Nabil Bank", category: "commercial" },
  { name: "Nepal Investment Mega Bank (NIMB)", code: "NIMB", shortName: "NIMB", category: "commercial" },
  { name: "NIC Asia Bank", code: "NIC_ASIA", shortName: "NIC Asia", category: "commercial" },
  { name: "Global IME Bank", code: "GLOBAL_IME", shortName: "Global IME", category: "commercial" },
  { name: "Agricultural Development Bank (ADB)", code: "ADB", shortName: "ADB", category: "development" },
  { name: "Laxmi Sunrise Bank", code: "LAXMI_SUNRISE", shortName: "Laxmi Sunrise", category: "commercial" },
];

export const SUPPORTED_BANKS = SUPPORTED_BANKS_LIST.map((b) => b.shortName);

export const STATS = [
  { value: "10+", label: "Nepal Banks & Wallets", detail: "Nabil, NIMB, NIC Asia, Global IME, eSewa" },
  { value: "100%", label: "On-Device Privacy", detail: "Zero cloud SMS scanning or upload" },
  { value: "Offline", label: "Hive Engine", detail: "Works anywhere without cellular data" },
  { value: "रू 0", label: "Free Forever", detail: "No subscriptions, paywalls, or ads" },
] as const;

export const FAQS = [
  {
    question: "How does Sajilo Khata read my SMS safely?",
    answer:
      "Sajilo Khata processes SMS completely locally on your Android device. It uses targeted pattern matching strictly for recognized bank and wallet senders (like Nabil, NIMB, NIC Asia, Global IME, Fonepay). Your personal family messages and OTP security codes are strictly filtered out and NEVER read, stored, or transmitted.",
  },
  {
    question: "Do I ever need to enter my bank password, PIN, or OTP?",
    answer:
      "Never! Sajilo Khata will NEVER ask for your bank password, debit card details, transaction PIN, or OTP. It operates purely as an expense tracker by listening to official debit and credit SMS alerts your bank sends to your phone.",
  },
  {
    question: "How are my transactions categorized?",
    answer:
      "Sajilo Khata automatically analyzes merchant names and bank tags to assign transactions into 12 categories such as Groceries, Utilities, Dining, Travel, and Shopping. You can also reassign or add custom tags anytime.",
  },
  {
    question: "Does it work when I am offline or have poor internet?",
    answer:
      "Yes, 100%! Sajilo Khata is architected offline-first using Hive local database. Whether you are traveling in remote districts or have no mobile data, your transactions are parsed, saved, and categorized immediately. It will sync securely to your private Google backup when online.",
  },
  {
    question: "Which Nepali banks and wallets are supported?",
    answer:
      "We support Nabil Bank, Nepal Investment Mega Bank (NIMB), NIC Asia, Global IME, Agricultural Development Bank (ADB), Laxmi Sunrise and more. You can also add custom SMS sender tags in settings.",
  },
  {
    question: "Is Sajilo Khata completely free?",
    answer:
      "Yes! Sajilo Khata is completely free for all Nepali users. There are no subscriptions, hidden fees, or ads.",
  },
];