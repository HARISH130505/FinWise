"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-green-600 text-white">
      {/* Animated background elements with fixed positions */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 animate-float"
            style={{
              width: `${150 + (i % 5) * 20}px`,
              height: `${150 + (i % 5) * 20}px`,
              top: `${(i * 10) % 100}%`,
              left: `${(i * 15) % 100}%`,
              animationDuration: `${5 + (i % 3)}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Learn, Play, and Grow Your Wealth</h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-lg mx-auto lg:mx-0">
              Your AI-powered financial assistant with gamified learning to make investing fun, engaging, and rewarding.
              Now with NFT and memecoin predictions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#chatbot">
                <button className="cursor-pointer px-8 py-3 rounded-full bg-white text-emerald-700 font-medium transition-all duration-300 hover:shadow-[0_10px_25px_-5px_rgba(255,255,255,0.3)] hover:scale-110">
                  Start Your Journey
                </button>
              </Link>
              <Link href="/crypto">
              <button className="cursor-pointer px-8 py-3 rounded-full bg-transparent border-2 border-white/50 text-white font-medium transition-all duration-300 hover:bg-white/10 hover:border-white">
                Crypto Predictions
              </button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)]">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold mr-3">
                      AI
                    </div>
                    <div className="text-sm font-medium">Financial Advisor</div>
                  </div>
                  <p className="text-sm">
                    Welcome to your financial journey! I'll help you learn investing concepts, predict crypto trends,
                    and guide your decisions. Ready to earn your first badge?
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center text-white font-bold mr-3">
                      Y
                    </div>
                    <div className="text-sm font-medium">You</div>
                  </div>
                  <p className="text-sm">
                    What do you think about the trending memecoins right now? Are they worth investing in?
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 relative overflow-hidden">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center text-white font-bold mr-3">
                      AI
                    </div>
                    <div className="text-sm font-medium">Financial Advisor</div>
                  </div>
                  <p className="text-sm relative z-10">
                    Memecoins are highly speculative and volatile investments. While some early investors have seen
                    significant returns, they carry extreme risk.
                    <br />
                    <br />
                    Before considering memecoins:
                    <br />
                    1. Build a solid foundation with traditional investments
                    <br />
                    2. Only use money you can afford to lose
                    <br />
                    3. Research the community, utility, and team behind the project
                    <br />
                    <br />
                    <span className="text-yellow-300 font-medium">+20 points for asking about crypto trends!</span>
                  </p>
                  <div className="absolute top-0 right-0  w-1/3 h-full"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 bg-emerald-300 rounded-full opacity-20"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
