import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      {/* Top footer */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* responsive grid: 1 col -> 2 cols */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left */}
            <div className="w-full">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug">
                Digital craftmanship&nbsp;sculpting&nbsp;you as an&nbsp;industry
                leader.
              </h1>

              {/* Links */}
              <div className="mt-8 grid grid-cols-2 gap-8 sm:gap-12 max-w-md">
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="hover:text-gray-300 cursor-pointer">Home</li>
                  <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    Portfolio
                  </li>
                </ul>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="hover:text-gray-300 cursor-pointer">Home</li>
                  <li className="hover:text-gray-300 cursor-pointer">Contact</li>
                  <li className="hover:text-gray-300 cursor-pointer">
                    Portfolio
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Logo */}
            <div className="w-full flex justify-start lg:justify-end">
              <img
                src="/assets/logo/hai-logo.png"
                alt="Hai logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <section>
        <div className="bg-slate-900/90 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-center gap-2 text-xs text-white/70 text-center">
            <span>© {2026} Meezan Group. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span>
              Website developed by{" "}
              <a
                href="#"
                className="text-white hover:underline underline-offset-4"
              >
                Hai Creations
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
