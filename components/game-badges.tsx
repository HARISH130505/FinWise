"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const badges = [
  {
    id: "beginner",
    name: "Beginner Investor",
    icon: "🏅",
    color: "from-green-400 to-emerald-500",
    description: "Earned by starting your investment journey",
    unlocked: true,
    progress: 100,
  },
  {
    id: "quiz",
    name: "Quiz Master",
    icon: "🧠",
    color: "from-teal-400 to-emerald-500",
    description: "Correctly answer 5 investment quizzes",
    unlocked: true,
    progress: 100,
  },
  {
    id: "nft",
    name: "NFT Explorer",
    icon: "🖼️",
    color: "from-blue-400 to-teal-500",
    description: "Learn about NFT fundamentals and trends",
    unlocked: false,
    progress: 70,
  },
  {
    id: "memecoin",
    name: "Memecoin Analyst",
    icon: "🚀",
    color: "from-yellow-400 to-orange-500",
    description: "Understand memecoin risks and opportunities",
    unlocked: false,
    progress: 40,
  },
  {
    id: "crypto",
    name: "Crypto Predictor",
    icon: "📈",
    color: "from-purple-400 to-pink-500",
    description: "Successfully predict crypto price movements",
    unlocked: false,
    progress: 10,
  },
]

export function GameBadges() {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>

      <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-emerald-600 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-emerald-900">Your Achievements</h3>
        </div>
        <p className="text-sm text-emerald-700 mt-1">Collect badges as you learn</p>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-5 gap-2 mb-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="relative cursor-pointer"
              onClick={() => setSelectedBadge(badge.id === selectedBadge ? null : badge.id)}
            >
              <div
                className={`w-full aspect-square rounded-xl flex items-center justify-center text-2xl ${
                  badge.unlocked ? `bg-gradient-to-br ${badge.color} shadow-md` : "bg-gray-200"
                } ${selectedBadge === badge.id ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`}
              >
                {badge.unlocked ? (
                  badge.icon
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                )}
                {!badge.unlocked && badge.progress > 0 && (
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeDasharray={`${badge.progress * 2.51} 251`}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/50"
          >
            {badges
              .filter((b) => b.id === selectedBadge)
              .map((badge) => (
                <div key={badge.id}>
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
                        badge.unlocked
                          ? `bg-gradient-to-br ${badge.color} shadow-md text-white`
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {badge.icon}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-medium text-emerald-900">{badge.name}</h4>
                      <p className="text-xs text-gray-600">{badge.description}</p>
                    </div>
                  </div>
                  {!badge.unlocked && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs text-emerald-700 mb-1">
                        <span>Progress</span>
                        <span>{badge.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
                          style={{ width: `${badge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  {badge.unlocked && (
                    <div className="mt-2 text-xs text-emerald-700 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Unlocked on May 15, 2025
                    </div>
                  )}
                </div>
              ))}
          </motion.div>
        )}

        <div className="mt-4">
          <button className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium hover:from-emerald-600 hover:to-teal-600 transition-colors duration-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            View All Achievements
          </button>
        </div>
      </div>
    </div>
  )
}

