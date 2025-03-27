"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const cryptoAssets = [
  {
    id: "nft1",
    type: "nft",
    name: "Bored Ape #8765",
    collection: "Bored Ape Yacht Club",
    price: "72.5 ETH",
    change: "+12.3%",
    positive: true,
    image: "/boredape.jpeg",
    description:
      "One of the most recognizable NFT collections featuring unique ape characters with various traits and accessories.",
    volume: "1,245 ETH (7d)",
    floorPrice: "68.2 ETH",
    holders: "6,420",
  },
  {
    id: "nft2",
    type: "nft",
    name: "Azuki #4231",
    collection: "Azuki",
    price: "18.2 ETH",
    change: "+8.7%",
    positive: true,
    image: "/azuki.png",
    description:
      "Anime-inspired NFT collection with a strong community and expanding ecosystem of digital and physical products.",
    volume: "876 ETH (7d)",
    floorPrice: "15.8 ETH",
    holders: "5,230",
  },
  {
    id: "nft3",
    type: "nft",
    name: "Pudgy #1337",
    collection: "Pudgy Penguins",
    price: "9.8 ETH",
    change: "-2.1%",
    positive: false,
    image: "/pudgy.png",
    description:
      "Cute penguin-themed NFTs that have evolved into a brand focused on positivity and children's content.",
    volume: "532 ETH (7d)",
    floorPrice: "9.1 ETH",
    holders: "4,870",
  },
  {
    id: "meme1",
    type: "memecoin",
    name: "DOGE",
    fullName: "Dogecoin",
    price: "$0.1234",
    change: "+23.5%",
    positive: true,
    image: "/dodge.jpg",
    description:
      "The original memecoin inspired by the Shiba Inu 'Doge' meme. Started as a joke but gained significant adoption and celebrity endorsements.",
    marketCap: "$16.4B",
    volume24h: "$1.2B",
    circulatingSupply: "132.7B DOGE",
  },
  {
    id: "meme2",
    type: "memecoin",
    name: "SHIB",
    fullName: "Shiba Inu",
    price: "$0.00002345",
    change: "+15.7%",
    positive: true,
    image: "/shiba.png",
    description:
      "Self-described 'Dogecoin killer' that has developed its own ecosystem including a decentralized exchange and NFT platform.",
    marketCap: "$13.8B",
    volume24h: "$987M",
    circulatingSupply: "589.4T SHIB",
  },
  {
    id: "meme3",
    type: "memecoin",
    name: "PEPE",
    fullName: "Pepe",
    price: "$0.00000789",
    change: "-5.2%",
    positive: false,
    image: "/pepe.png",
    description:
      "Based on the popular Pepe the Frog meme, this token gained rapid popularity in the 2023 memecoin resurgence.",
    marketCap: "$3.2B",
    volume24h: "$456M",
    circulatingSupply: "420T PEPE",
  },
]

export default function CryptoPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)
  const [prediction, setPrediction] = useState<{
    assetId: string
    direction: "up" | "down"
    timestamp: number
  } | null>(null)

  const filteredAssets = activeTab === "all" ? cryptoAssets : cryptoAssets.filter((asset) => asset.type === activeTab)

  const handlePrediction = (assetId: string, direction: "up" | "down") => {
    setPrediction({
      assetId,
      direction,
      timestamp: Date.now(),
    })

    // In a real app, this would submit the prediction to a backend
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Crypto Prediction Challenge
          </h1>
          <p className="text-gray-600 mt-2">
            Test your market prediction skills with NFTs and memecoins. Earn points and badges for correct predictions!
          </p>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg mb-8">
          <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Prediction Stats</h2>
                <p className="text-sm text-gray-600 mt-1">Track your prediction accuracy and earn rewards</p>
              </div>

              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  Level: Crypto Novice
                </div>
                <div className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                  125 Points
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-emerald-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Total Predictions</div>
                <div className="text-2xl font-bold text-emerald-900">12</div>
                <div className="text-xs text-emerald-600 mt-1">+3 this week</div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Accuracy Rate</div>
                <div className="text-2xl font-bold text-emerald-900">58%</div>
                <div className="text-xs text-green-600 mt-1">+5% from last week</div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Current Streak</div>
                <div className="text-2xl font-bold text-emerald-900">3</div>
                <div className="text-xs text-emerald-600 mt-1">Best: 5 predictions</div>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Next Badge</div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white text-lg mr-2">
                    🔮
                  </div>
                  <div>
                    <div className="text-sm font-medium text-emerald-900">Crypto Oracle</div>
                    <div className="text-xs text-emerald-600">2 more correct predictions</div>
                  </div>
                </div>
              </div>
            </div>

            {prediction && (
              <div className="mt-6 p-4 border border-emerald-200 rounded-xl bg-emerald-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white text-lg mr-3">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-medium text-emerald-900">Active Prediction</h3>
                      <p className="text-sm text-emerald-700">
                        You predicted {cryptoAssets.find((a) => a.id === prediction.assetId)?.name} will go
                        <span
                          className={
                            prediction.direction === "up" ? " text-green-600 font-medium" : " text-red-600 font-medium"
                          }
                        >
                          {prediction.direction === "up" ? " UP" : " DOWN"}
                        </span>{" "}
                        in the next 24 hours.
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">{new Date(prediction.timestamp).toLocaleString()}</div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="text-xs text-emerald-700">Result available in: 23h 45m</div>
                  <div className="w-32 h-2 bg-emerald-100 rounded-full overflow-hidden">
                    <div className="w-[2%] h-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === "all"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                : "bg-white border border-emerald-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50"
            }`}
          >
            All Assets
          </button>
          <button
            onClick={() => setActiveTab("nft")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === "nft"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                : "bg-white border border-emerald-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50"
            }`}
          >
            NFTs
          </button>
          <button
            onClick={() => setActiveTab("memecoin")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === "memecoin"
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md"
                : "bg-white border border-emerald-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50"
            }`}
          >
            Memecoins
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <motion.div
              key={asset.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden mr-4">
                    <img
                      src={asset.image || "/placeholder.svg"}
                      alt={asset.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{asset.name}</h3>
                    <p className="text-sm text-gray-600">{asset.type === "nft" ? asset.collection : asset.fullName}</p>
                    <div className="flex items-center mt-1">
                      <div className="font-medium text-gray-900">{asset.price}</div>
                      <div className={`ml-2 text-sm ${asset.positive ? "text-green-600" : "text-red-600"}`}>
                        {asset.change}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {asset.description.length > 120 ? asset.description.substring(0, 120) + "..." : asset.description}
                </p>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {asset.type === "nft" ? (
                    <>
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <div className="text-xs text-gray-500">Volume</div>
                        <div className="text-sm font-medium text-emerald-900">{(asset as any).volume}</div>
                      </div>
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <div className="text-xs text-gray-500">Floor Price</div>
                        <div className="text-sm font-medium text-emerald-900">{(asset as any).floorPrice}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <div className="text-xs text-gray-500">Market Cap</div>
                        <div className="text-sm font-medium text-emerald-900">{(asset as any).marketCap}</div>
                      </div>
                      <div className="p-2 bg-emerald-50 rounded-lg">
                        <div className="text-xs text-gray-500">24h Volume</div>
                        <div className="text-sm font-medium text-emerald-900">{(asset as any).volume24h}</div>
                      </div>
                    </>
                  )}
                </div>

                <div className="border-t border-emerald-100 pt-4">
                  <p className="text-sm font-medium text-emerald-800 mb-2">Make a 24h prediction:</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handlePrediction(asset.id, "up")}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                        prediction?.assetId === asset.id && prediction?.direction === "up"
                          ? "bg-green-500 text-white"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      } transition-colors duration-200 flex items-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      Going Up
                    </button>
                    <button
                      onClick={() => handlePrediction(asset.id, "down")}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium ${
                        prediction?.assetId === asset.id && prediction?.direction === "down"
                          ? "bg-red-500 text-white"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      } transition-colors duration-200 flex items-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      Going Down
                    </button>
                  </div>
                  <div className="mt-2 text-center text-xs text-emerald-700">
                    {prediction?.assetId === asset.id
                      ? "Prediction recorded! +25 points if correct"
                      : "Earn 25 points for a correct prediction"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}

