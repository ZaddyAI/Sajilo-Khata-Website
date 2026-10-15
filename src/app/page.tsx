import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SupportedBanksSection from "@/components/SupportedBanksSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import FaqSection from "@/components/FaqSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8F7F2] text-[#202923] antialiased selection:bg-[#D8F3E8] selection:text-[#08634D]">
      {/* Scroll indicator bar & floating back to top */}
      <ScrollProgress />

      {/* Floating Pill Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero with Sajilo Khata Animated Dual Phone */}
        <Hero />

        {/* The Library: Supported Nepal Banks & Wallets */}
        <SupportedBanksSection />

        {/* Numbered Bento Features Grid */}
        <FeaturesGrid />

        {/* Inside the App: 4-Step Journey */}
        <HowItWorks />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Closing Download CTA Banner */}
        <CtaBanner />
      </main>

      {/* Deep Forest Green Footer */}
      <Footer />
    </div>
  );
}
