"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

type ProductType = "mutual_fund" | "stock" | "bond" | "fd"
type RiskLevel = "low" | "moderate" | "high"

interface Product {
  id: string
  name: string
  type: ProductType
  risk: RiskLevel
  returns: string
  description: string
}

const sampleProducts: Product[] = [
  {
    id: "mf1",
    name: "Equity Growth Fund",
    type: "mutual_fund",
    risk: "high",
    returns: "12-15% (3yr)",
    description:
      "A diversified equity fund focusing on long-term capital appreciation through investments in large-cap stocks.",
  },
  {
    id: "mf2",
    name: "Balanced Advantage Fund",
    type: "mutual_fund",
    risk: "moderate",
    returns: "9-12% (3yr)",
    description: "Dynamic asset allocation between equity and debt based on market valuations to optimize returns.",
  },
  {
    id: "mf3",
    name: "Debt Income Fund",
    type: "mutual_fund",
    risk: "low",
    returns: "6-8% (3yr)",
    description: "Invests in fixed-income securities to provide regular income and capital preservation.",
  },
  {
    id: "st1",
    name: "Tech Innovation Ltd.",
    type: "stock",
    risk: "high",
    returns: "Variable",
    description: "A leading technology company with strong growth potential in AI and cloud services.",
  },
  {
    id: "bd1",
    name: "Government Treasury Bond",
    type: "bond",
    risk: "low",
    returns: "7.5% (Fixed)",
    description: "Government-backed securities with fixed interest payments and principal repayment at maturity.",
  },
  {
    id: "fd1",
    name: "Bank Fixed Deposit",
    type: "fd",
    risk: "low",
    returns: "5.5% (Fixed)",
    description: "Secure investment with guaranteed returns over a fixed period with bank deposit insurance.",
  },
]

export function ProductExplorer() {
  const [productType, setProductType] = useState<string>("all")
  const [riskLevel, setRiskLevel] = useState<number[]>([50])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts)
  const [isFiltering, setIsFiltering] = useState(false)

  const handleFilter = () => {
    setIsFiltering(true)

    setTimeout(() => {
      let filtered = sampleProducts

      if (productType !== "all") {
        filtered = filtered.filter((product) => product.type === productType)
      }

      const riskMapping: Record<number, RiskLevel[]> = {
        0: ["low"],
        25: ["low"],
        50: ["low", "moderate"],
        75: ["moderate", "high"],
        100: ["high"],
      }

      const selectedRisks = riskMapping[riskLevel[0]] || ["low", "moderate", "high"]
      filtered = filtered.filter((product) => selectedRisks.includes(product.risk))

      setFilteredProducts(filtered)
      setIsFiltering(false)
    }, 600)
  }

  const getRiskColor = (risk: RiskLevel) => {
    switch (risk) {
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      case "moderate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getRiskGradient = (risk: RiskLevel) => {
    switch (risk) {
      case "low":
        return "from-green-50 to-green-100"
      case "moderate":
        return "from-yellow-50 to-yellow-100"
      case "high":
        return "from-red-50 to-red-100"
      default:
        return "from-gray-50 to-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border border-emerald-100 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
          <CardTitle className="text-emerald-800">Investment Product Explorer</CardTitle>
          <CardDescription>Find investment products that match your preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Product Type</label>
            <Select value={productType} onValueChange={setProductType}>
              <SelectTrigger className="border-emerald-200 focus:ring-emerald-500">
                <SelectValue placeholder="Select product type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="mutual_fund">Mutual Funds</SelectItem>
                <SelectItem value="stock">Stocks</SelectItem>
                <SelectItem value="bond">Bonds</SelectItem>
                <SelectItem value="fd">Fixed Deposits</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Risk Tolerance</label>
            <div className="pt-4 pb-2">
              <Slider value={riskLevel} onValueChange={setRiskLevel} max={100} step={25} className="w-full" />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Low Risk</span>
              <span>Moderate</span>
              <span>High Risk</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t border-emerald-100 p-4">
          <Button
            onClick={handleFilter}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
            disabled={isFiltering}
          >
            {isFiltering ? (
              <div className="flex items-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Filtering...
              </div>
            ) : (
              "Apply Filters"
            )}
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AnimatePresence mode="wait">
          {isFiltering ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full flex justify-center items-center py-12"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
                <p className="text-emerald-700">Finding the best matches for you...</p>
              </div>
            </motion.div>
          ) : (
            <>
              {filteredProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center py-12"
                >
                  <p className="text-gray-500">No products match your criteria. Try adjusting your filters.</p>
                </motion.div>
              ) : (
                filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full border border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-md overflow-hidden">
                      <CardHeader className={`pb-2 bg-gradient-to-r ${getRiskGradient(product.risk)}`}>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base">{product.name}</CardTitle>
                          <Badge className={`${getRiskColor(product.risk)} border`}>
                            {product.risk.charAt(0).toUpperCase() + product.risk.slice(1)} Risk
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center">
                          <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 mr-2"></span>
                          {product.returns} expected returns
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm">{product.description}</p>
                      </CardContent>
                      <CardFooter className="flex justify-between border-t">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                        >
                          Details
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                        >
                          Learn More
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}