"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const challenges = [
  {
    id: "market-sim",
    title: "Market Simulator Challenge",
    description: "Test your investment skills in a simulated market environment",
    icon: "📈",
    color: "from-indigo-500 to-blue-500",
    difficulty: "Intermediate",
    points: 100,
    timeEstimate: "15 min",
    progress: 0,
  },
  {
    id: "portfolio",
    title: "Portfolio Builder",
    description: "Create a diversified portfolio that meets specific goals",
    icon: "💼",
    color: "from-purple-500 to-pink-500",
    difficulty: "Advanced",
    points: 150,
    timeEstimate: "20 min",
    progress: 0,
  },
  {
    id: "risk",
    title: "Risk Assessment",
    description: "Analyze different scenarios and make risk-adjusted decisions",
    icon: "⚖️",
    color: "from-yellow-500 to-orange-500",
    difficulty: "Beginner",
    points: 75,
    timeEstimate: "10 min",
    progress: 30,
  },
  {
    id: "retirement",
    title: "Retirement Planner",
    description: "Build a long-term investment strategy for retirement",
    icon: "🏖️",
    color: "from-green-500 to-emerald-500",
    difficulty: "Intermediate",
    points: 125,
    timeEstimate: "15 min",
    progress: 0,
  },
  {
    id: "tax",
    title: "Tax Efficiency Master",
    description: "Optimize a portfolio for tax efficiency across different accounts",
    icon: "📊",
    color: "from-red-500 to-pink-500",
    difficulty: "Advanced",
    points: 200,
    timeEstimate: "25 min",
    progress: 0,
  },
]

export default function ChallengesPage() {
  const [selectedChallenge, setSelectedChallenge] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Investment Challenges
          </h1>
          <p className="text-gray-600 mt-2">
            Test your knowledge, earn points, and unlock badges by completing these interactive challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge) => (
            <motion.div
              key={challenge.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedChallenge(challenge.id === selectedChallenge ? null : challenge.id)}
            >
              <div className={`h-3 bg-gradient-to-r ${challenge.color}`}></div>
              <div className="p-5">
                <div className="flex items-start">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${challenge.color} shadow-md`}
                  >
                    {challenge.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-gray-900">{challenge.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{challenge.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    {challenge.points} points
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-emerald-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {challenge.timeEstimate}
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-emerald-500"
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
                    {challenge.difficulty}
                  </div>
                </div>

                {challenge.progress > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-emerald-700 mb-1">
                      <span>Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${challenge.color}`}
                        style={{ width: `${challenge.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {selectedChallenge === challenge.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-emerald-100"
                  >
                    <p className="text-sm text-gray-700 mb-3">
                      This challenge will test your knowledge of {challenge.title.toLowerCase()} concepts and
                      strategies. Complete it to earn points and unlock a special badge!
                    </p>
                    <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium hover:from-emerald-700 hover:to-teal-700 transition-colors duration-200">
                      Start Challenge
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg">
          <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Investment Simulation</h2>
            <p className="text-gray-600 mb-6">
              Put your investment knowledge to the test in our weekly market simulation. Make investment decisions based
              on real market data and compete with other users for the top spot on the leaderboard!
            </p>

            <div className="bg-emerald-50 rounded-2xl p-5 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium text-emerald-900">This Week's Challenge</h3>
                  <p className="text-sm text-emerald-700">Build a recession-resistant portfolio</p>
                </div>
                <div className="text-sm text-emerald-700 font-medium">Ends in: 3 days 14 hours</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Current Rank</div>
                  <div className="text-2xl font-bold text-emerald-900">#42</div>
                  <div className="text-xs text-emerald-600 mt-1">Top 15%</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Portfolio Value</div>
                  <div className="text-2xl font-bold text-emerald-900">$12,458</div>
                  <div className="text-xs text-green-600 mt-1">+4.2% this week</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-sm text-gray-500 mb-1">Potential Reward</div>
                  <div className="text-2xl font-bold text-emerald-900">250 points</div>
                  <div className="text-xs text-emerald-600 mt-1">+ 'Market Wizard' badge</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium hover:from-emerald-700 hover:to-teal-700 transition-colors duration-200 shadow-md hover:shadow-lg">
                Continue Simulation
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

