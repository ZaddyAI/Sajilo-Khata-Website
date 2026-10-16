import type { Metadata } from "next";
import { APP_NAME, DEVELOPER } from "@/lib/constants";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Privacy Policy - ${APP_NAME}`,
  description: `Privacy Policy for ${APP_NAME} - Nepal SMS Expense Tracker. Learn how we collect, use, and protect your data.`,
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAF6] text-[#191C1A] antialiased">
      <Navbar />

      {/* Privacy Policy Content */}
      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <div className="card-paper p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl font-extrabold font-sans text-[#191C1A]">Privacy Policy</h1>
          <p className="mt-3 text-sm text-[#425F3C] font-semibold">
            Last updated: August 9, 2026
          </p>

          <div className="mt-10 space-y-10 text-[#434840] leading-relaxed">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                1. Introduction
              </h2>
              <p>
                Welcome to Sajilo Khata (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;). We operate the Sajilo Khata mobile application
                (the &quot;App&quot;). This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                use our App.
              </p>
              <p className="mt-3">
                By using the App, you agree to the collection and use of
                information in accordance with this Privacy Policy. If you do not
                agree, please discontinue use of the App.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                2. Information We Collect
              </h2>
              <h3 className="mb-2 mt-5 text-base font-medium text-on-surface font-sans">
                2.1 Account Information
              </h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Google Sign-In:</strong> Your name and email address as
                  provided by your Google account.
                </li>
                <li>
                  <strong>Email/Password Sign-Up:</strong> Your name and email
                  address provided during registration.
                </li>
              </ul>

              <h3 className="mb-2 mt-5 text-base font-medium text-on-surface font-sans">
                2.2 SMS Data
              </h3>
              <p>
                With your explicit permission, the App reads incoming SMS messages
                from your device. We only parse SMS messages that match known bank
                and digital wallet sender patterns (e.g., NIMB, NIC Asia, ADB,
                Nabil, Laxmi Sunrise, eSewa, Khalti, IME Pay).
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1.5">
                <li>
                  We extract transaction details: amount, type (debit/credit), bank
                  name, and date.
                </li>
                <li>
                  Personal messages, promotional SMS, and unrecognized messages are{" "}
                  <strong>never read, stored, or transmitted</strong>.
                </li>
                <li>
                  SMS processing happens entirely on your device. Raw SMS content is
                  not sent to our servers.
                </li>
              </ul>

              <h3 className="mb-2 mt-5 text-base font-medium text-on-surface font-sans">
                2.3 Transaction &amp; Financial Data
              </h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  Transactions you log manually or that are auto-imported from SMS.
                </li>
                <li>Savings goals you create and contributions you make.</li>
                <li>Category assignments and notes you add.</li>
              </ul>

              <h3 className="mb-2 mt-5 text-base font-medium text-on-surface font-sans">
                2.4 Device &amp; Usage Data
              </h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Device type and operating system version.</li>
                <li>
                  App version and crash logs (via Firebase Crashlytics, if enabled).
                </li>
                <li>Connectivity status for offline/sync functionality.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To provide and maintain the App&apos;s core functionality.</li>
                <li>
                  To automatically categorize and log your financial transactions.
                </li>
                <li>
                  To sync your data across devices via Firebase Cloud Firestore.
                </li>
                <li>
                  To send push notifications about transaction logs, budget alerts,
                  and goal achievements (only when you enable notifications).
                </li>
                <li>
                  To improve and optimize the App&apos;s performance and user
                  experience.
                </li>
                <li>To detect and prevent fraud or unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                4. Data Storage &amp; Security
              </h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Local Storage:</strong> Your data is stored locally on
                  your device using Hive (an encrypted local database).
                </li>
                <li>
                  <strong>Cloud Storage:</strong> When signed in, your data is
                  synced to Firebase Cloud Firestore under your personal user
                  account.
                </li>
                <li>
                  <strong>Firestore Security Rules:</strong> Your data is
                  exclusively accessible by you. No other user or third party can
                  read or write your data.
                </li>
                <li>
                  We use industry-standard encryption and security practices to
                  protect your information.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                5. Data Sharing &amp; Third Parties
              </h2>
              <p>
                We do not sell, trade, or rent your personal information. We may
                share data with:
              </p>
              <ul className="mt-2 list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Firebase (Google):</strong> For authentication, database
                  storage, and push notifications. Subject to{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
                  >
                    Google&apos;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Legal Requirements:</strong> If required by law, court
                  order, or governmental regulation.
                </li>
              </ul>
              <p className="mt-3">
                We do not share your data with advertisers, data brokers, or any
                third party for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                6. Your Rights &amp; Choices
              </h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <strong>Access &amp; Edit:</strong> You can view and edit all your
                  transaction and goal data within the App.
                </li>
                <li>
                  <strong>Delete:</strong> You can delete individual transactions
                  or goals at any time.
                </li>
                <li>
                  <strong>Account Deletion:</strong> You can sign out and delete
                  your account data by contacting us.
                </li>
                <li>
                  <strong>SMS Permission:</strong> You can revoke SMS reading
                  permission at any time in your device settings. The App will
                  continue to work with manual entries only.
                </li>
                <li>
                  <strong>Notifications:</strong> You can disable push
                  notifications in your device settings or within the App.
                </li>
                <li>
                  <strong>Data Export:</strong> You can export your transactions as
                  a CSV file at any time.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                7. Children&apos;s Privacy
              </h2>
              <p>
                The App is not intended for use by children under the age of 13. We
                do not knowingly collect personal information from children. If we
                become aware that a child has provided us with personal information,
                we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. You are
                advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-on-surface font-sans">
                9. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us:
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
