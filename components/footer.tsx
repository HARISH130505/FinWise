import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
        </div>
        <p className="mb-4 text-emerald-100 max-w-2xl mx-auto">
          Disclaimer: This tool provides educational information only and not personalized financial advice. Always
          consult with a qualified financial advisor before making investment decisions. Crypto predictions are for
          educational purposes only.
        </p>
        <p className="text-emerald-200">© 2025 FinWise Assistant. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;