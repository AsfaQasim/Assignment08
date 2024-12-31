import React from "react";

const Header = () => {
  return (
    <div>
      <header className="text-gray-700 body-font bg-gradient-to-r from-gray-50 to-gray-100 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between
         bg-[#1A1A1A]">
          {/* Blog Title */}
          <h1 className="text-2xl font-bold tracking-wide text-[#D89F55]">
            Flower Blog
          </h1>

          {/* Navigation Links */}
          <nav className="flex space-x-8 text-base">
            <a
              className="transition-all duration-300 text-[#D89F55]"
              href="#"
            >Home
            </a>
            <a
              className="transition-all duration-300 text-[#D89F55]"
              href="#"
            >
         Blog
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;