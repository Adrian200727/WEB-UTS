"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false); // Track mobile nav visibility

  // Toggle mobile nav visibility
  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <>
      <div
        className={`relative bg-[url('/img/hero.png')] bg-cover bg-center bg-no-repeat h-screen`}
      >
        <div className="absolute inset-0"></div>

        {/* Main Content */}
        <div className={"relative z-10 px-8 pt-8"}>
          <nav
            className={`py-2 z-50 lg:px-24 lg:py-8 lg:top-0 lg:left-0 right-0 transition-colors duration-300 ${
              isScrolled ? "bg-[#232340]" : "bg-transparent"
            }`}
          >
            <div className="flex justify-between items-center">
              {/* Logo Section */}
              <div className="text-white flex items-center">
                <span className="font-bold text-4xl">team</span>
                <span className="text-blue-500 font-bold text-2xl">.</span>
              </div>

              {/* Links Section */}
              <div>
                <img
                  src="/img/humb.png"
                  alt="Menu"
                  className="w-10 lg:hidden"
                  onClick={toggleMobileNav}
                  style={{ zIndex: 10 }} // Toggle mobile nav on click
                />
              </div>
              {/* nav desktop */}
              <div className="hidden lg:flex space-x-8 text-white">
                <a href="#" className="hover:text-blue-500 text-lg">
                  Product
                </a>
                <a href="#" className="hover:text-blue-500 text-lg">
                  Blog
                </a>
                <a href="#" className="hover:text-blue-500 text-lg">
                  Support
                </a>
                <a href="#" className="hover:text-blue-500 text-lg">
                  Log In
                </a>
                {/* Button Section */}
                <div>
                  <a
                    href="#"
                    className="bg-[#5A4FF3] text-white py-2 px-4 opacity-[50%] hover:bg-blue-600"
                  >
                    Get Access
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* nav android & tablet */}
        {showMobileNav && ( // Conditionally render mobile nav
          <div
            className="lg:hidden sm:p-4 z-50 fixed mini:pt-32 top-0 left-0 w-full flex flex-col bg-[#232340] text-white"
            style={{ zIndex: 0 }} // Pastikan z-index lebih tinggi
          >
            <a href="#" className="hover:text-blue-500 text-lg p-2">
              Product
            </a>
            <a href="#" className="hover:text-blue-500 text-lg p-2">
              Blog
            </a>
            <a href="#" className="hover:text-blue-500 text-lg p-2">
              Support
            </a>
            <a href="#" className="hover:text-blue-500 text-lg p-2">
              Log In
            </a>
            {/* Button Section */}
            <div className="p-4 flex justify-center align-center">
              <a
                href="#"
                className="bg-[#5A4FF3] text-white py-2 px-4 opacity-[50%] hover:bg-blue-600"
              >
                Get Access
              </a>
            </div>
          </div>
        )}
        {/* Hero Section */}
        <div className="px-8 mini:pt-12 text-left lg:px-24 sm:h-3/4 sm:content-center">
          <h1 className="font-bold leading-tight text-left md:text-5xl lg:text-5xl lg:mt-24 text-wrap mb-4">
            Instant collaboration <br className="hidden lg:block" /> for remote
            teams
          </h1>
          <p className="text-left mb-14 text-2xl md:pr-96 lg:text-2xl">
            All-in-one place for your remote team{" "}
            <br className="hidden lg:block" />
            to chat, collaborate and track project progress.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start ">
            <input
              className="py-4 px-5 rounded-[4px] text-[#7676B2] mb-4 md:mb-0 md:flex-1 lg:flex-none"
              type="text"
              placeholder="Email"
            />
            <button className="ml-0 md:ml-4 py-3 px-10 lg:24  rounded-[4px] bg-[#7676B2] text-white">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
