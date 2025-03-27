"use client"
import { useUser } from "@clerk/nextjs";

const topUsers = [
  {
    rank: 1,
    name: "Sophia Chen",
    points: 3850,
    badges: 12,
    streak: 42,
    level: "Investment Guru",
    change: "up",
  },
  {
    rank: 2,
    name: "Marcus Johnson",
    points: 3720,
    badges: 11,
    streak: 38,
    level: "Market Wizard",
    change: "same",
  },
  {
    rank: 3,
    name: "Aisha Patel",
    points: 3580,
    badges: 10,
    streak: 31,
    level: "Portfolio Pro",
    change: "up",
  },
  {
    rank: 4,
    name: "David Kim",
    points: 3350,
    badges: 9,
    streak: 25,
    level: "Investment Strategist",
    change: "down",
  },
  {
    rank: 5,
    name: "Emma Rodriguez",
    points: 3210,
    badges: 9,
    streak: 29,
    level: "Market Analyst",
    change: "up",
  },
  {
    rank: 6,
    name: "Jamal Wilson",
    points: 3050,
    badges: 8,
    streak: 22,
    level: "Investment Enthusiast",
    change: "down",
  },
  {
    rank: 7,
    name: "Olivia Taylor",
    points: 2980,
    badges: 8,
    streak: 19,
    level: "Market Enthusiast",
    change: "same",
  },
  {
    rank: 8,
    name: "Liam Singh",
    points: 2840,
    badges: 7,
    streak: 16,
    level: "Investment Apprentice",
    change: "up",
  },
  {
    rank: 9,
    name: "Zoe Martinez",
    points: 2790,
    badges: 7,
    streak: 14,
    level: "Investment Apprentice",
    change: "down",
  },
  {
    rank: 10,
    name: "Noah Lee",
    points: 2650,
    badges: 6,
    streak: 12,
    level: "Market Novice",
    change: "same",
  },
]

export default function LeaderboardPage() {
  const { user } = useUser();
  const currentUser = {
    rank: 42,
    name: user?.fullName || "You",
    points: 1250,
    badges: 4,
    streak: 7,
    avatar: user?.imageUrl || "/placeholder.svg?height=40&width=40",
    level: "Investment Beginner",
    change: "up",
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-teal-50 to-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-teal-700 bg-clip-text text-transparent">
            Leaderboard
          </h1>
          <p className="text-gray-600 mt-2">
            See how you stack up against other investors and compete for the top spot
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg">
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Investors</h2>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-emerald-100">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Investor
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Level
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Badges
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Streak
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-100">
                      {topUsers.map((user) => (
                        <tr key={user.rank} className="hover:bg-emerald-50 transition-colors duration-150">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <span
                                className={`
                                w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                ${
                                  user.rank === 1
                                    ? "bg-yellow-100 text-yellow-800"
                                    : user.rank === 2
                                      ? "bg-gray-100 text-gray-800"
                                      : user.rank === 3
                                        ? "bg-orange-100 text-orange-800"
                                        : "bg-emerald-100 text-emerald-800"
                                }
                              `}
                              >
                                {user.rank}
                              </span>
                              <span className="ml-2">
                                {user.change === "up" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-green-500"
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
                                )}
                                {user.change === "down" && (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-red-500"
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
                                )}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-500 text-white font-medium">
                                {user.name.charAt(0).toUpperCase()}
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800">
                              {user.level}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                            {user.points.toLocaleString()}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-emerald-500 mr-1"
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
                              {user.badges}
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-orange-500 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                                />
                              </svg>
                              {user.streak} days
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 border-t border-emerald-100 pt-6">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">Your Ranking</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="bg-emerald-50 rounded-xl">
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm font-medium">
                              {currentUser.rank}
                            </span>
                            <span className="ml-2">
                              {currentUser.change === "up" && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-green-500"
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
                              )}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {user?.imageUrl ? (
                              <img 
                                src={user.imageUrl} 
                                alt="User Avatar" 
                                className="h-8 w-8 rounded-full object-cover"
                              />
                            ) : (
                              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-medium">
                                {user?.firstName?.charAt(0).toUpperCase() || "U"}
                              </div>
                            )}
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900">{user?.fullName || "Unknown"}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800">
                            {currentUser.level}
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          {currentUser.points.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-emerald-500 mr-1"
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
                            {currentUser.badges}
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-orange-500 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                              />
                            </svg>
                            {currentUser.streak} days
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg">
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h2>

                <div className="space-y-4">
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Current Rank</div>
                      <div className="text-xl font-bold text-emerald-900">#{currentUser.rank}</div>
                    </div>
                    <div className="text-xs text-green-600 mt-1">Moved up 3 positions this week</div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">Points to Next Level</div>
                      <div className="text-xl font-bold text-emerald-900">250</div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-4">
                    <div className="text-sm text-gray-500 mb-2">Badges Earned</div>
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-lg shadow-sm"
                        >
                          {["🏅", "🧠", "📊", "💰"][i]}
                        </div>
                      ))}
                      {Array.from({ length: 2 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-lg"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium hover:from-emerald-700 hover:to-teal-700 transition-colors duration-200">
                    View Your Progress
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden border border-emerald-100 shadow-lg">
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Ways to Earn Points</h2>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Complete Lessons</div>
                      <div className="text-xs text-gray-500">10-20 points per lesson</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Take Quizzes</div>
                      <div className="text-xs text-gray-500">25 points per quiz</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Complete Challenges</div>
                      <div className="text-xs text-gray-500">75-200 points per challenge</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Maintain Streak</div>
                      <div className="text-xs text-gray-500">5 points per day, bonus at milestones</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

