"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  points: number
  badge: string | null
}

export function FinancialAssistant() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your financial advisor. How can I help you with your investment journey today? Ask me about stocks, crypto, NFTs, or memecoins!",
      points: 0,
      badge: null,
    },
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [currentTypingText, setCurrentTypingText] = useState("")
  const [fullResponse, setFullResponse] = useState("")
  const [typingSpeed, setTypingSpeed] = useState(30) // ms per character
  const [userPoints, setUserPoints] = useState(0)

  useEffect(() => {
    if (isTyping && fullResponse) {
      const timeout = setTimeout(() => {
        if (currentTypingText.length < fullResponse.length) {
          setCurrentTypingText(fullResponse.substring(0, currentTypingText.length + 1))
        } else {
          setIsTyping(false)
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === "typing" ? { ...msg, id: Date.now().toString(), content: fullResponse } : msg,
            ),
          )
          setFullResponse("")
          setCurrentTypingText("")
        }
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [isTyping, currentTypingText, fullResponse, typingSpeed])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "" || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      points: 0,
      badge: null,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    setTimeout(() => {
      const response = generateResponse(input)
      setFullResponse(response.content)
      setMessages((prev) => [...prev, { id: "typing", role: "assistant", content: "", points: 0, badge: null }])
      setIsTyping(true)
      setCurrentTypingText("")
      setIsLoading(false)

      if (response.points > 0) {
        setUserPoints((prev) => prev + response.points)
      }
    }, 500)
  }

  const generateResponse = (query: string): { content: string; points: number; badge: string | null } => {
    const lowerQuery = query.toLowerCase()
    let points = 0
    let badge: string | null = null

    if (messages.length === 1) {
      points = 15
    }

    if (lowerQuery.includes("nft") || lowerQuery.includes("nfts")) {
      points = 20
      badge = "NFT Explorer"
      return {
        content:
          "NFTs are unique digital assets verified using blockchain. They are speculative and volatile. Focus on community strength and utility before investing.\n\n+20 points and you've earned the 'NFT Explorer' badge! 🏆",
        points,
        badge,
      }
    } else if (lowerQuery.includes("crypto") || lowerQuery.includes("bitcoin") || lowerQuery.includes("ethereum")) {
      points = 15
      return {
        content:
          "Cryptocurrencies operate on decentralized networks. Bitcoin and Ethereum are leading assets. Crypto investments are highly volatile—invest wisely.\n\n+15 points for exploring cryptocurrency concepts!",
        points,
        badge,
      }
    } else {
      points = 5
      return {
        content: "That's a great financial question! Can you share more details about your goals?\n\n+5 points for engaging!",
        points,
        badge,
      }
    }
  }

  return (
    <div className="flex flex-col h-[685px]" id="chatbot">
      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-white font-bold">
            💰
          </div>
          <div className="ml-2 text-sm font-medium text-gray-700">Your Points: {userPoints}</div>
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-2xl">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className="flex items-start max-w-[80%]">
                <div
                  className={`p-3 rounded-2xl shadow-sm ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                      : "bg-white border border-gray-100"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.id === "typing" ? currentTypingText : message.content}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4">
        <form onSubmit={handleSend} className="flex space-x-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about investing, NFTs, or crypto..."
            className="w-full px-4 py-3 rounded-full border border-gray-200"
            disabled={isLoading || isTyping}
          />
          <button
            type="submit"
            disabled={isLoading || isTyping || input.trim() === ""}
            className="px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
