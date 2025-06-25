"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, Shield } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/language-context"
import { LanguageToggle } from "@/components/language-toggle"

// 버튼 표시 여부를 제어하는 상수 (나중에 true로 변경하면 버튼이 다시 표시됩니다)
const SHOW_INVITE_BUTTON = false
const SHOW_LEARN_MORE_BUTTON = false

export default function Home() {
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
            <a href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.features")}
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.howItWorks")}
            </a>
            <a href="#privacy" className="text-sm font-medium hover:underline underline-offset-4">
              {t("nav.privacy")}
            </a>
          </nav>
          <LanguageToggle />
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">{t("hero.description")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* 봇 초대하기 버튼 - 상수 값에 따라 조건부 렌더링 */}
                  {SHOW_INVITE_BUTTON && (
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      {t("hero.inviteButton")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}

                  {/* 더 알아보기 버튼 - 상수 값에 따라 조건부 렌더링 */}
                  {SHOW_LEARN_MORE_BUTTON && (
                    <Button variant="outline" className="border-gray-700 hover:bg-gray-700">
                      <span className="text-black dark:text-white">{t("hero.learnMoreButton")}</span>
                    </Button>
                  )}
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                  <Image
                    src="/images/usecase-2.png"
                    alt="1-Coin-Bot 팀 밸런싱 결과"
                    width={600}
                    height={400}
                    className="object-contain bg-[#1e1f22]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("features.title")}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("features.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center">{t("features.teamBalancing.title")}</h3>
                <p className="text-center text-gray-500">{t("features.teamBalancing.description")}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center">{t("features.customGameManagement.title")}</h3>
                <p className="text-center text-gray-500">{t("features.customGameManagement.description")}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-center">{t("features.privacy.title")}</h3>
                <p className="text-center text-gray-500">{t("features.privacy.description")}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("howItWorks.title")}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("howItWorks.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 items-center mt-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
                    {t("howItWorks.step1.label")}
                  </div>
                  <h3 className="text-2xl font-bold">{t("howItWorks.step1.title")}</h3>
                  <p className="text-gray-500">{t("howItWorks.step1.description")}</p>
                </div>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
                    {t("howItWorks.step2.label")}
                  </div>
                  <h3 className="text-2xl font-bold">{t("howItWorks.step2.title")}</h3>
                  <p className="text-gray-500">{t("howItWorks.step2.description")}</p>
                </div>
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
                    {t("howItWorks.step3.label")}
                  </div>
                  <h3 className="text-2xl font-bold">{t("howItWorks.step3.title")}</h3>
                  <p className="text-gray-500">{t("howItWorks.step3.description")}</p>
                </div>
              </div>
              <div className="relative mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-xl border shadow-xl">
                <Image
                  src="/images/usecase-1.png"
                  alt="1-Coin-Bot 참가자 명단"
                  width={600}
                  height={400}
                  className="object-contain bg-[#1e1f22]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t("privacy.title")}</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("privacy.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 mt-12">
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">{t("privacy.dataUsage.title")}</h3>
                <ul className="space-y-4 text-gray-500">
                  {t("privacy.dataUsage.points")
                    .split(",")
                    .map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-4 w-4 rounded-full bg-blue-600"></div>
                        <p>{point.trim()}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
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
              <a href="#features" className="hover:underline">
                {t("nav.features")}
              </a>
              <a href="#how-it-works" className="hover:underline">
                {t("nav.howItWorks")}
              </a>
              <a href="#privacy" className="hover:underline">
                {t("nav.privacy")}
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
