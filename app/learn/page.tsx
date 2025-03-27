import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Financial Education Center
          </h2>
          <p className="text-gray-600 mt-2">
            Build your financial knowledge with our comprehensive learning resources.
          </p>
        </div>

        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-emerald-50 p-1">
            <TabsTrigger
              value="basics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
            >
              Investment Basics
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
            >
              Investment Products
            </TabsTrigger>
            <TabsTrigger
              value="strategies"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
            >
              Investment Strategies
            </TabsTrigger>
            <TabsTrigger
              value="taxes"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-500 data-[state=active]:text-white"
            >
              Tax Planning
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Understanding Risk and Return</CardTitle>
                <CardDescription>The fundamental relationship that drives all investments</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Risk and return are two sides of the same coin in investing. Generally, investments with higher
                  potential returns come with higher risks, while safer investments typically offer lower returns.
                </p>
                <h3 className="font-medium text-lg mb-2 text-emerald-700">Types of Investment Risks:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Market Risk:</strong> The possibility that the entire market will decline, affecting the
                    value of your investments.
                  </li>
                  <li>
                    <strong>Inflation Risk:</strong> The risk that your investment returns won't keep pace with
                    inflation, reducing your purchasing power.
                  </li>
                  <li>
                    <strong>Liquidity Risk:</strong> The risk of not being able to sell your investment quickly without
                    a significant loss in value.
                  </li>
                  <li>
                    <strong>Credit Risk:</strong> The risk that a borrower will default on their debt obligations.
                  </li>
                </ul>
                <p>
                  Understanding your personal risk tolerance is essential for building an investment portfolio that
                  aligns with your financial goals and helps you sleep at night during market fluctuations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Time Horizon in Investing</CardTitle>
                <CardDescription>How your investment timeline affects your strategy</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Your investment time horizon—the length of time you expect to hold an investment before needing the
                  money—is a crucial factor in determining your investment strategy.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1 text-emerald-700">Short-Term (Less than 3 years)</h3>
                    <p>
                      For short-term goals like buying a car or saving for a down payment, focus on capital
                      preservation. Consider high-yield savings accounts, short-term fixed deposits, and liquid funds.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-emerald-700">Medium-Term (3-7 years)</h3>
                    <p>
                      For medium-term goals like higher education or home renovations, a balanced approach works best.
                      Consider a mix of debt and equity mutual funds, with a tilt toward debt for safety.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-emerald-700">Long-Term (More than 7 years)</h3>
                    <p>
                      For long-term goals like retirement, you can afford to take more risk for potentially higher
                      returns. Consider a higher allocation to equity mutual funds, index funds, and even direct stock
                      investments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Mutual Funds</CardTitle>
                <CardDescription>Professional management with diversification benefits</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Mutual funds pool money from many investors to invest in a diversified portfolio of stocks, bonds, or
                  other securities. They're managed by professional fund managers who make investment decisions on
                  behalf of the investors.
                </p>
                <h3 className="font-medium text-lg mb-2 text-emerald-700">Types of Mutual Funds in India:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Equity Funds:</strong> Invest primarily in stocks, offering high growth potential with
                    higher risk.
                  </li>
                  <li>
                    <strong>Debt Funds:</strong> Invest in fixed-income securities like bonds and government securities,
                    offering stable returns with lower risk.
                  </li>
                  <li>
                    <strong>Hybrid Funds:</strong> Invest in a mix of equity and debt to balance risk and return.
                  </li>
                  <li>
                    <strong>ELSS (Equity Linked Savings Scheme):</strong> Equity funds that offer tax benefits under
                    Section 80C with a 3-year lock-in period.
                  </li>
                  <li>
                    <strong>Index Funds:</strong> Passively managed funds that track a market index like Nifty 50 or
                    Sensex.
                  </li>
                </ul>
                <p>
                  Mutual funds are an excellent starting point for new investors due to their professional management,
                  diversification, and the ability to start with small amounts through SIPs (Systematic Investment
                  Plans).
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Stocks</CardTitle>
                <CardDescription>Direct ownership in companies with growth potential</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  When you buy stocks, you're purchasing ownership shares in individual companies. Stock prices can be
                  volatile in the short term but have historically provided higher returns over long periods.
                </p>
                <h3 className="font-medium text-lg mb-2 text-emerald-700">Types of Stocks:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Large-Cap:</strong> Shares of well-established companies with market capitalization above
                    ₹20,000 crores. Generally more stable but with moderate growth potential.
                  </li>
                  <li>
                    <strong>Mid-Cap:</strong> Companies with market capitalization between ₹5,000-20,000 crores. Offer a
                    balance of growth and stability.
                  </li>
                  <li>
                    <strong>Small-Cap:</strong> Companies with market capitalization below ₹5,000 crores. Higher growth
                    potential but with increased volatility and risk.
                  </li>
                  <li>
                    <strong>Dividend Stocks:</strong> Companies that regularly distribute a portion of earnings to
                    shareholders, providing income in addition to potential price appreciation.
                  </li>
                </ul>
                <p>
                  Direct stock investing requires more research, knowledge, and active management compared to mutual
                  funds. New investors should consider starting with blue-chip companies or through index funds before
                  venturing into individual stock picking.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Systematic Investment Plans (SIPs)</CardTitle>
                <CardDescription>Disciplined investing through regular contributions</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  SIPs allow you to invest a fixed amount regularly (typically monthly) in mutual funds, regardless of
                  market conditions. This approach offers several advantages:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Rupee Cost Averaging:</strong> By investing regularly, you buy more units when prices are
                    low and fewer when prices are high, potentially lowering your average cost per unit over time.
                  </li>
                  <li>
                    <strong>Disciplined Investing:</strong> SIPs enforce financial discipline by automating your
                    investments.
                  </li>
                  <li>
                    <strong>Power of Compounding:</strong> Regular investments over long periods can generate
                    significant wealth through compounding returns.
                  </li>
                  <li>
                    <strong>Flexibility:</strong> You can start with as little as ₹500 per month and increase, decrease,
                    or stop your SIP as needed.
                  </li>
                </ul>
                <p>
                  SIPs are particularly beneficial for salaried individuals who receive regular income and want to build
                  wealth systematically over time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Asset Allocation</CardTitle>
                <CardDescription>Balancing your portfolio across different investment types</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Asset allocation is the process of dividing your investments among different asset classes like
                  equity, debt, gold, and real estate based on your goals, time horizon, and risk tolerance.
                </p>
                <h3 className="font-medium text-lg mb-2 text-emerald-700">Common Asset Allocation Strategies:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Age-Based Allocation:</strong> A simple rule of thumb is to subtract your age from 100 to
                    determine your equity allocation percentage. For example, a 30-year-old might have 70% in equity and
                    30% in debt.
                  </li>
                  <li>
                    <strong>Goal-Based Allocation:</strong> Align your asset allocation with specific financial goals
                    and their time horizons.
                  </li>
                  <li>
                    <strong>Risk-Based Allocation:</strong> Base your allocation on your personal risk tolerance,
                    regardless of age or goals.
                  </li>
                </ul>
                <p>
                  Regular rebalancing of your portfolio is essential to maintain your target asset allocation as market
                  movements can shift the proportions over time.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="taxes" className="space-y-6">
            <Card className="border-emerald-100 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                <CardTitle className="text-emerald-800">Tax-Efficient Investing</CardTitle>
                <CardDescription>Strategies to minimize tax impact on your investment returns</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Understanding the tax implications of different investments can significantly impact your overall
                  returns. Here are key tax considerations for Indian investors:
                </p>
                <h3 className="font-medium text-lg mb-2 text-emerald-700">Tax Treatment of Different Investments:</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Equity Investments:</strong> Long-term capital gains (held for more than 1 year) are taxed
                    at 10% for gains exceeding ₹1 lakh per year. Short-term gains are taxed at 15%.
                  </li>
                  <li>
                    <strong>Debt Investments:</strong> Long-term capital gains (held for more than 3 years) are taxed at
                    20% with indexation benefits. Short-term gains are added to your income and taxed at your applicable
                    income tax slab rate.
                  </li>
                  <li>
                    <strong>Fixed Deposits:</strong> Interest earned is fully taxable at your income tax slab rate.
                  </li>
                  <li>
                    <strong>ELSS Funds:</strong> Qualify for tax deduction up to ₹1.5 lakh under Section 80C with a
                    3-year lock-in period.
                  </li>
                </ul>
                <h3 className="font-medium text-lg mb-2 text-emerald-700">Tax-Saving Strategies:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Tax-Loss Harvesting:</strong> Offset capital gains with capital losses to reduce your tax
                    liability.
                  </li>
                  <li>
                    <strong>Strategic Asset Location:</strong> Hold tax-inefficient investments in tax-advantaged
                    accounts when possible.
                  </li>
                  <li>
                    <strong>Utilize Tax Deductions:</strong> Maximize available deductions under Sections 80C, 80D, 80G,
                    etc.
                  </li>
                  <li>
                    <strong>Consider Debt Mutual Funds:</strong> For long-term debt investments, debt mutual funds can
                    be more tax-efficient than fixed deposits due to indexation benefits.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

