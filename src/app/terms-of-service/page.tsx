import Link from "next/link";
import type { Metadata } from "next";
import { APP_NAME, AUTHOR, DEVELOPER, LINKS } from "@/lib/constants";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Terms of Service - ${APP_NAME}`,
  description: `Terms of Service for ${APP_NAME} - Nepal SMS Expense Tracker. Read the terms governing your use of the app.`,
};

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAF6] text-[#191C1A] antialiased">
      <Navbar />

      {/* Terms of Service Content */}
      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <div className="card-paper p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl font-extrabold font-sans text-[#191C1A]">Terms of Service</h1>
          <p className="mt-3 text-sm text-[#425F3C] font-semibold">
            Last updated: August 9, 2026
          </p>

          <div className="mt-10 space-y-10 text-[#434840] leading-relaxed">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using {APP_NAME} (the
                &quot;App&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree to these Terms, do not
                use the App.
              </p>
              <p className="mt-3">
                These Terms constitute a legally binding agreement between you
                (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and{" "}
                {AUTHOR.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
                the developer of the App.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                2. Description of Service
              </h2>
              <p>
                {APP_NAME} is a personal finance management application designed
                for users in Nepal. The App provides the following core
                functionalities:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>
                  Automatic parsing of bank SMS messages to log financial
                  transactions.
                </li>
                <li>
                  Manual entry and categorization of income and expenses.
                </li>
                <li>
                  Savings goal creation, tracking, and progress monitoring.
                </li>
                <li>
                  Monthly financial summaries and spending analytics.
                </li>
                <li>
                  Offline data storage with optional cloud synchronization.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                3. Eligibility
              </h2>
              <p>
                You must be at least 13 years of age to use the App. By using
                the App, you represent and warrant that you meet this age
                requirement and have the legal capacity to enter into these
                Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                4. Account Registration
              </h2>
              <p>
                To use certain features of the App, you must create an account
                using Google Sign-In or email/password registration. You agree
                to:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>
                  Provide accurate, current, and complete information during
                  registration.
                </li>
                <li>
                  Maintain the security of your account credentials and not share
                  your account with others.
                </li>
                <li>
                  Promptly update your account information if it changes.
                </li>
                <li>
                  Accept responsibility for all activities that occur under your
                  account.
                </li>
              </ul>
              <p className="mt-3">
                You must notify us immediately if you suspect unauthorized access
                to your account.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                5. SMS Permission &amp; Data Processing
              </h2>
              <p>
                The App requires SMS reading permission to provide its automatic
                transaction logging feature. By granting this permission, you
                understand and agree that:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>
                  The App will read incoming SMS messages on your device to
                  identify bank and digital wallet transaction notifications.
                </li>
                <li>
                  Only SMS messages matching known financial sender patterns are
                  processed. Personal messages are never read or stored.
                </li>
                <li>
                  SMS processing occurs entirely on your device. Raw SMS content
                  is not transmitted to our servers.
                </li>
                <li>
                  You may revoke SMS permission at any time through your device
                  settings. The App will continue to function with manual entries
                  only.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                6. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>
                  Use the App for any unlawful purpose or in violation of any
                  applicable laws or regulations.
                </li>
                <li>
                  Attempt to reverse-engineer, decompile, or disassemble any
                  portion of the App.
                </li>
                <li>
                  Use the App to transmit malicious code, viruses, or any harmful
                  technology.
                </li>
                <li>
                  Interfere with or disrupt the integrity or performance of the
                  App or its servers.
                </li>
                <li>
                  Attempt to gain unauthorized access to the App or its related
                  systems.
                </li>
                <li>
                  Resell, sublicense, or distribute the App or any part thereof
                  without written permission.
                </li>
                <li>
                  Use automated tools (bots, scrapers) to access or interact with
                  the App.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                7. Intellectual Property
              </h2>
              <p>
                All intellectual property rights in the App, including but not
                limited to copyrights, trademarks, trade names, logos, design
                elements, source code, and documentation, are owned by{" "}
                {AUTHOR.name}. These Terms do not grant you any right, title, or
                interest in the App beyond the limited use rights expressly set
                forth herein.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                8. Financial Data Disclaimer
              </h2>
              <p className="font-medium text-on-surface">
                Important: {APP_NAME} is a financial tracking tool and does not
                provide financial advice.
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>
                  The App is designed to help you record and visualize your
                  financial transactions.
                </li>
                <li>
                  Any summaries, charts, or analytics provided by the App are for
                  informational purposes only.
                </li>
                <li>
                  We do not guarantee the accuracy of auto-parsed SMS data.
                  You are responsible for verifying your transaction records.
                </li>
                <li>
                  The App should not be used as the sole basis for any financial
                  decisions. Consult a qualified financial professional for
                  personalized advice.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                9. Data &amp; Privacy
              </h2>
              <p>
                Your use of the App is also governed by our{" "}
                <Link
                  href={LINKS.privacy}
                  className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your
                information. By using the App, you consent to the data practices
                described in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                10. Service Availability &amp; Modifications
              </h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  We strive to keep the App available at all times, but we do not
                  guarantee uninterrupted access. The App may be temporarily
                  unavailable due to maintenance, updates, or circumstances
                  beyond our control.
                </li>
                <li>
                  We reserve the right to modify, suspend, or discontinue the App
                  (or any part thereof) at any time with reasonable notice.
                </li>
                <li>
                  We may release updates to improve functionality and address
                  issues. You are encouraged to keep the App updated to the
                  latest version.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                11. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>
                  The App is provided &quot;as is&quot; and &quot;as available&quot;
                  without warranties of any kind, whether express or implied,
                  including but not limited to implied warranties of
                  merchantability, fitness for a particular purpose, and
                  non-infringement.
                </li>
                <li>
                  {AUTHOR.name} shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages arising from your
                  use of or inability to use the App.
                </li>
                <li>
                  In no event shall our total liability exceed the amount you
                  paid us (if any) for using the App in the twelve (12) months
                  preceding the claim.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                12. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless{" "}
                {AUTHOR.name} and its officers, directors, employees, and agents
                from any claims, losses, damages, liabilities, costs, and
                expenses (including reasonable attorney&apos;s fees) arising from:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-1.5">
                <li>Your use of the App.</li>
                <li>Your violation of these Terms.</li>
                <li>
                  Your violation of any third-party rights, including
                  intellectual property and privacy rights.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                13. Termination
              </h2>
              <p>
                You may terminate your use of the App at any time by
                uninstalling it and deleting your account. We may suspend or
                terminate your access to the App at any time, with or without
                cause, with or without notice.
              </p>
              <p className="mt-3">
                Upon termination, your right to use the App ceases immediately.
                We may retain your data as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                14. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Nepal. Any disputes arising under these Terms
                shall be resolved in the competent courts of Nepal, unless
                otherwise required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                15. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these Terms at any time. Material
                changes will be communicated through the App or via email. Your
                continued use of the App after changes become effective
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                16. Contact Us
              </h2>
              <p>
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Developer:</strong> {DEVELOPER.name}
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href={DEVELOPER.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#425F3C] underline decoration-[#DDE5D8] underline-offset-2 hover:decoration-[#425F3C] transition-colors"
                  >
                    {DEVELOPER.website.replace("https://", "")}
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${DEVELOPER.email}`}
                    className="text-[#425F3C] underline decoration-[#DDE5D8] underline-offset-2 hover:decoration-[#425F3C] transition-colors"
                  >
                    {DEVELOPER.email}
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Unified Modern Footer */}
      <Footer />
    </div>
  );
}
