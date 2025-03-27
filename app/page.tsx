"use client"
import { FinancialAssistant } from "@/components/financial-assistant"
import { EducationalResources } from "@/components/educational-resources"
import { HeroSection } from "@/components/hero-section"
import { GameBadges } from "@/components/game-badges"
import { CryptoTrends } from "@/components/crypto-trends"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      <HeroSection />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-full mr-3 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </span>
                  Your Financial Advisor
                </h2>
                <p className="text-gray-600 mb-6">
                  Ask questions about investing, crypto trends, or explore investment products suitable for your goals.
                </p>
                <FinancialAssistant />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <GameBadges />
            <CryptoTrends />
          </div>

          <div className="col-span-1 lg:col-span-3">
            <EducationalResources />
          </div>

        </div>
      </main>
    </div>
  )
}
