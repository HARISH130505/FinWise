"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function EducationalResources() {
  const [activeTab, setActiveTab] = useState("basics")

  const tabs = [
    { id: "basics", label: "Basics" },
    { id: "crypto", label: "Crypto" },
    { id: "strategies", label: "Strategies" },
    { id: "quiz", label: "Quiz" },
  ]

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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h3 className="text-lg font-semibold text-emerald-900">Financial Education</h3>
        </div>
        <p className="text-sm text-emerald-700 mt-1">Learn and earn points</p>
      </div>

      <div className="p-0">
        <div className="flex border-b border-emerald-100 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative flex-1 ${
                activeTab === tab.id ? "text-emerald-700" : "text-gray-500 hover:text-emerald-600"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                  initial={false}
                />
              )}
            </button>
          ))}
        </div>

        <div className="p-4">
          {activeTab === "basics" && (
            <div className="space-y-3">
              {[
                {
                  title: "Investment Fundamentals",
                  desc: "Learn the core concepts of investing and how markets work.",
                },
                { title: "Risk and Return", desc: "Understand the relationship between risk and potential returns." },
                { title: "Financial Planning", desc: "Create a solid financial foundation before investing." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-3 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-md hover:bg-emerald-50/50 cursor-pointer relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-emerald-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-100/50 to-transparent w-16 h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              ))}
              <div className="mt-3 text-center">
                <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                  View all lessons (+10 points)
                </button>
              </div>
            </div>
          )}

          {activeTab === "crypto" && (
            <div className="space-y-3">
              {[
                {
                  title: "NFT Fundamentals",
                  desc: "Learn about non-fungible tokens and their use cases in digital ownership.",
                },
                {
                  title: "Memecoin Analysis",
                  desc: "Understand the risks and potential of meme-based cryptocurrencies.",
                },
                { title: "Blockchain Basics", desc: "Explore the technology that powers cryptocurrencies and NFTs." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-3 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-md hover:bg-emerald-50/50 cursor-pointer relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-emerald-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-100/50 to-transparent w-16 h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              ))}
              <div className="mt-3 text-center">
                <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                  View all crypto lessons (+15 points)
                </button>
              </div>
            </div>
          )}

          {activeTab === "strategies" && (
            <div className="space-y-3">
              {[
                {
                  title: "Dollar-Cost Averaging",
                  desc: "Invest a fixed amount regularly to reduce impact of volatility.",
                },
                {
                  title: "Asset Allocation",
                  desc: "Distribute investments across different asset classes to manage risk.",
                },
                {
                  title: "Crypto Portfolio Strategy",
                  desc: "Balance high-risk crypto assets with traditional investments.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="p-3 rounded-xl border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-md hover:bg-emerald-50/50 cursor-pointer relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-emerald-900">{item.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-100/50 to-transparent w-16 h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              ))}
              <div className="mt-3 text-center">
                <button className="text-sm text-emerald-600 hover:text-emerald-800 font-medium">
                  View all strategies (+20 points)
                </button>
              </div>
            </div>
          )}

          {activeTab === "quiz" && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/50">
                <h4 className="font-medium text-emerald-900">Crypto Quiz Challenge</h4>
                <p className="text-sm text-gray-600 mt-1">Test your knowledge and earn points!</p>
                <div className="mt-3">
                  <p className="text-sm font-medium text-emerald-800">
                    Which of these is NOT a characteristic of NFTs?
                  </p>
                  <div className="mt-2 space-y-2">
                    {[
                      "They are unique digital assets",
                      "They are fungible and interchangeable",
                      "They use blockchain technology",
                      "They can represent digital art",
                    ].map((option, i) => (
                      <div
                        key={option}
                        className="p-2 rounded-lg border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 cursor-pointer transition-colors duration-200 text-sm"
                      >
                        <div className="flex items-center">
                          <div className="w-5 h-5 rounded-full border border-emerald-300 mr-2 flex items-center justify-center">
                            <span className="text-xs">{String.fromCharCode(65 + i)}</span>
                          </div>
                          {option}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between">
                    <span className="text-xs text-emerald-600">+25 points for correct answer</span>
                    <button className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-medium hover:shadow-md transition-all duration-300">
                      Submit Answer
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-emerald-100 bg-emerald-50/50">
                <h4 className="font-medium text-emerald-900">Memecoin Challenge</h4>
                <p className="text-sm text-gray-600 mt-1">Complete to earn the 'Crypto Analyst' badge!</p>
                <div className="mt-3 flex justify-between items-center">
                  <div className="text-xs text-emerald-600">2/5 questions completed</div>
                  <div className="w-24 h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  </div>
                </div>
                <button className="mt-3 w-full px-3 py-2 rounded-lg border border-emerald-300 text-emerald-700 text-sm font-medium hover:bg-emerald-100 transition-colors duration-200">
                  Continue Challenge
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

