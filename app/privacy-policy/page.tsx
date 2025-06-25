"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import Image from "next/image"

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Image src="/images/coin-logo-2.png" alt="1-Coin-Bot Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold">1-Coin-Bot</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="/" className="text-sm font-medium hover:underline underline-offset-4">
              홈
            </a>
            <a href="/terms-of-service" className="text-sm font-medium hover:underline underline-offset-4">
              {t("footer.termsOfService")}
            </a>
          </nav>
          <LanguageToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">{t("privacyPolicy.title")}</h1>
            <p className="text-gray-600 text-sm">{t("privacyPolicy.lastUpdated")}</p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.introduction.title")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("privacyPolicy.introduction.content")}</p>
            </section>

            {/* Riot Games Disclaimer */}
            <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-yellow-800">{t("privacyPolicy.riotDisclaimer.title")}</h2>
              <p className="text-yellow-800 leading-relaxed">{t("privacyPolicy.riotDisclaimer.content")}</p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.dataCollection.title")}</h2>
              <ul className="space-y-3">
                {t("privacyPolicy.dataCollection.items").map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.dataUsage.title")}</h2>
              <ul className="space-y-3">
                {t("privacyPolicy.dataUsage.items").map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.dataSharing.title")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("privacyPolicy.dataSharing.content")}</p>
              <ul className="space-y-3">
                {t("privacyPolicy.dataSharing.items").map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.dataRetention.title")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("privacyPolicy.dataRetention.content")}</p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.userRights.title")}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t("privacyPolicy.userRights.content")}</p>
              <ul className="space-y-3">
                {t("privacyPolicy.userRights.items").map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.contact.title")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("privacyPolicy.contact.content")}</p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("privacyPolicy.changes.title")}</h2>
              <p className="text-gray-700 leading-relaxed">{t("privacyPolicy.changes.content")}</p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <div className="flex items-center gap-2">
              <Image src="/images/coin-logo-2.png" alt="1-Coin-Bot Logo" width={24} height={24} className="h-6 w-6" />
              <span className="text-lg font-bold">1-Coin-Bot</span>
            </div>
            <p className="text-sm text-gray-500">{t("footer.description")}</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <h3 className="text-sm font-medium">{t("footer.links")}</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-500">
              <a href="/" className="hover:underline">
                홈
              </a>
              <a href="/privacy-policy" className="hover:underline">
                {t("footer.privacyPolicy")}
              </a>
              <a href="/terms-of-service" className="hover:underline">
                {t("footer.termsOfService")}
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 md:flex-1">
            <h3 className="text-sm font-medium">{t("footer.legalNotice")}</h3>
            <nav className="flex flex-col gap-2 text-sm text-gray-500">
              <p>{t("footer.legalText")}</p>
            </nav>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-gray-500">
          <p>{t("footer.copyright")}</p>
        </div>
      </footer>
    </div>
  )
} 