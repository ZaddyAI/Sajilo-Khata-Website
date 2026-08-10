export const APP_NAME = "Sajilo Khata";
export const APP_TAGLINE = "Nepal's smartest expense tracker";
export const APP_DESCRIPTION =
  "Automatically reads bank SMS to log income and expenses. Track savings goals, set budgets, and manage your money in NPR.";

export const LOGO = "/sajilo_khata_logo.png";

export const AUTHOR = {
  name: "Gambhir Poudel",
  website: "https://gambhirpoudel.com.np",
};

export const LINKS = {
  playStore: "https://play.google.com/store/apps/details?id=com.sajilokhata",
  github: "https://github.com/redpixel-labs/sajilo-khata",
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
};

export const SUPPORTED_BANKS = [
  "NIMB",
  "NIC Asia",
  "ADB",
  "Nabil Bank",
  "Laxmi Sunrise",
] as const;

export const STATS = [
  { value: `${SUPPORTED_BANKS.length}+`, label: "Banks Supported" },
  { value: "Offline", label: "First Design" },
  { value: "100%", label: "Free to Use" },
] as const;