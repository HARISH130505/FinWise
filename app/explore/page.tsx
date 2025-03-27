import { ProductExplorer } from "@/components/product-explorer"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white"> 
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Explore Investment Products
          </h2>
          <p className="text-gray-600 mt-2">
            Discover investment options that match your financial goals and risk tolerance.
          </p>
        </div>

        <ProductExplorer />
      </main>
    </div>
  )
}

