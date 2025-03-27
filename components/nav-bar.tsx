"use client"

import { useState} from "react";
import Link from "next/link";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useAuth();

  return (
    <header className="bg-white sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative w-10 h-10 mr-3 rounded-full flex items-center justify-center text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 animate-gradient-xy"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 relative z-10"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <Link href="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                FinWise
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {[
              { label: "Learn", href: "/learn" },
              { label: "Explore", href: "/explore" },
              { label: "Challenges", href: "/challenges" },
              { label: "Crypto", href: "/crypto" },
              { label: "Leaderboard", href: "/leaderboard" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="group relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                <span className="relative z-10 text-gray-700 group-hover:text-white">{label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </Link>
            ))}
            {!isSignedIn ? (
              <div className="cursor-pointer ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:from-emerald-700 hover:to-teal-700">
                <SignInButton/>
              </div>
            ) : (
              <UserButton />
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-3 px-2 bg-white rounded-lg shadow-lg">
            {[
              { label: "Learn", href: "/learn" },
              { label: "Explore", href: "/explore" },
              { label: "Challenges", href: "/challenges" },
              { label: "Crypto", href: "/crypto" },
              { label: "Leaderboard", href: "/leaderboard" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {!isSignedIn && (
              <button className="mt-3 w-full px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-sm font-medium">
                Sign Up
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}