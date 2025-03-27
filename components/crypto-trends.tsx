"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const trendingNFTs = [
  {
    id: "nft1",
    name: "Bored Ape #8765",
    collection: "Bored Ape Yacht Club",
    price: "72.5 ETH",
    change: "+12.3%",
    positive: true,
    image: "/boredape.jpeg",
  },
  {
    id: "nft2",
    name: "Azuki #4231",
    collection: "Azuki",
    price: "18.2 ETH",
    change: "+8.7%",
    positive: true,
    image: "/azuki.png",
  },
  {
    id: "nft3",
    name: "Pudgy #1337",
    collection: "Pudgy Penguins",
    price: "9.8 ETH",
    change: "-2.1%",
    positive: false,
    image: "/pudgy.png",
  },
]

const trendingMemecoins = [
  {
    id: "meme1",
    name: "DOGE",
    fullName: "Dogecoin",
    price: "$0.1234",
    change: "+23.5%",
    positive: true,
    image: "/dodge.jpg",
  },
  {
    id: "meme2",
    name: "SHIB",
    fullName: "Shiba Inu",
    price: "$0.00002345",
    change: "+15.7%",
    positive: true,
    image: "/shiba.png",
  },
  {
    id: "meme3",
    name: "PEPE",
    fullName: "Pepe",
    price: "$0.00000789",
    change: "-5.2%",
    positive: false,
    image: "/pepe.png",
  },
]

export function CryptoTrends() {
  const [activeTab, setActiveTab] = useState("nfts")
  const [predictionMode, setPredictionMode] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null)
  const [prediction, setPrediction] = useState<"up" | "down" | null>(null)

  const handlePrediction = (direction: "up" | "down") => {
    setPrediction(direction)
    // In a real app, this would submit the prediction and track it
    setTimeout(() => {
      setPredictionMode(false)
      setSelectedAsset(null)
      setPrediction(null)
    }, 1500)
  }

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
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-emerald-900">Crypto Trends & Predictions</h3>
        </div>
        <p className="text-sm text-emerald-700 mt-1">Track trends and predict movements</p>
      </div>

      <div className="p-0">
        <div className="flex border-b border-emerald-100">
          <button
            onClick={() => setActiveTab("nfts")}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative flex-1 ${
              activeTab === "nfts" ? "text-emerald-700" : "text-gray-500 hover:text-emerald-600"
            }`}
          >
            NFTs
            {activeTab === "nfts" && (
              <motion.div
                layoutId="cryptoTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={false}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab("memecoins")}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 relative flex-1 ${
              activeTab === "memecoins" ? "text-emerald-700" : "text-gray-500 hover:text-emerald-600"
            }`}
          >
            Memecoins
            {activeTab === "memecoins" && (
              <motion.div
                layoutId="cryptoTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"
                initial={false}
              />
            )}
          </button>
        </div>

        <div className="p-4">
          {activeTab === "nfts" && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-emerald-900">Trending NFTs</h4>
                <button
                  onClick={() => setPredictionMode(!predictionMode)}
                  className={`text-xs px-2 py-1 rounded-full ${
                    predictionMode
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  } transition-colors duration-200`}
                >
                  {predictionMode ? "Cancel Prediction" : "Make Prediction"}
                </button>
              </div>

              {trendingNFTs.map((nft) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-xl border ${
                    selectedAsset === nft.id
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-emerald-100 hover:border-emerald-200"
                  } transition-all duration-300 cursor-pointer relative overflow-hidden`}
                  onClick={() => predictionMode && setSelectedAsset(nft.id)}
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg overflow-hidden mr-3">
                      <img
                        src={nft.image || "/placeholder.svg"}
                        alt={nft.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">{nft.name}</h5>
                      <p className="text-xs text-gray-500">{nft.collection}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{nft.price}</div>
                      <div className={`text-xs ${nft.positive ? "text-green-600" : "text-red-600"}`}>{nft.change}</div>
                    </div>
                  </div>

                  {selectedAsset === nft.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-emerald-200"
                    >
                      <p className="text-xs text-emerald-700 mb-2">Predict price movement in next 24h:</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePrediction("up")}
                          className={`flex-1 py-1 rounded-lg text-xs font-medium ${
                            prediction === "up"
                              ? "bg-green-500 text-white"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          } transition-colors duration-200`}
                        >
                          Going Up 📈
                        </button>
                        <button
                          onClick={() => handlePrediction("down")}
                          className={`flex-1 py-1 rounded-lg text-xs font-medium ${
                            prediction === "down" ? "bg-red-500 text-white" : "bg-red-100 text-red-700 hover:bg-red-200"
                          } transition-colors duration-200`}
                        >
                          Going Down 📉
                        </button>
                      </div>
                      {prediction && (
                        <div className="mt-2 text-center text-xs text-emerald-700">
                          Prediction recorded! +25 points if correct
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <div className="text-center mt-2">
                <button className="text-xs text-emerald-600 hover:text-emerald-800 font-medium">
                  View more NFT trends
                </button>
              </div>
            </div>
          )}

          {activeTab === "memecoins" && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-emerald-900">Trending Memecoins</h4>
                <button
                  onClick={() => setPredictionMode(!predictionMode)}
                  className={`text-xs px-2 py-1 rounded-full ${
                    predictionMode
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                  } transition-colors duration-200`}
                >
                  {predictionMode ? "Cancel Prediction" : "Make Prediction"}
                </button>
              </div>

              {trendingMemecoins.map((coin) => (
                <motion.div
                  key={coin.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-3 rounded-xl border ${
                    selectedAsset === coin.id
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-emerald-100 hover:border-emerald-200"
                  } transition-all duration-300 cursor-pointer relative overflow-hidden`}
                  onClick={() => predictionMode && setSelectedAsset(coin.id)}
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <img
                        src={coin.image || "/placeholder.svg"}
                        alt={coin.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">{coin.name}</h5>
                      <p className="text-xs text-gray-500">{coin.fullName}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{coin.price}</div>
                      <div className={`text-xs ${coin.positive ? "text-green-600" : "text-red-600"}`}>
                        {coin.change}
                      </div>
                    </div>
                  </div>

                  {selectedAsset === coin.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-emerald-200"
                    >
                      <p className="text-xs text-emerald-700 mb-2">Predict price movement in next 24h:</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePrediction("up")}
                          className={`flex-1 py-1 rounded-lg text-xs font-medium ${
                            prediction === "up"
                              ? "bg-green-500 text-white"
                              : "bg-green-100 text-green-700 hover:bg-green-200"
                          } transition-colors duration-200`}
                        >
                          Going Up 📈
                        </button>
                        <button
                          onClick={() => handlePrediction("down")}
                          className={`flex-1 py-1 rounded-lg text-xs font-medium ${
                            prediction === "down" ? "bg-red-500 text-white" : "bg-red-100 text-red-700 hover:bg-red-200"
                          } transition-colors duration-200`}
                        >
                          Going Down 📉
                        </button>
                      </div>
                      {prediction && (
                        <div className="mt-2 text-center text-xs text-emerald-700">
                          Prediction recorded! +25 points if correct
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}

              <div className="text-center mt-2">
                <button className="text-xs text-emerald-600 hover:text-emerald-800 font-medium">
                  View more memecoin trends
                </button>
              </div>
            </div>
          )}

          <div className="mt-4 p-3 rounded-xl border border-emerald-100 bg-emerald-50/50">
            <h4 className="text-sm font-medium text-emerald-900 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Prediction Challenge
            </h4>
            <p className="text-xs text-gray-600 mt-1">
              Make 5 correct predictions to earn the "Crypto Oracle" badge and 250 bonus points!
            </p>
            <div className="mt-2 flex justify-between items-center">
              <div className="text-xs text-emerald-700">1/5 correct predictions</div>
              <div className="w-24 h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div className="w-1/5 h-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

