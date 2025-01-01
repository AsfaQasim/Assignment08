import Link from "next/link";
import React from "react";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
})

const Header = () => {
  return (
    <div>
      <header className="text-gray-700 body-font bg-gradient-to-r from-gray-50 to-gray-100 shadow-md">
        <div
          className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between
         bg-[#1A1A1A]"
        >
          {/* Blog Title */}
          <h1 className={`${italiana.className} text-4xl font-bold tracking-wide text-[#D89F55]`}>
            Flower Blog
          </h1>

          {/* Navigation Links */}
          <nav className="flex space-x-8 text-2xl">
            <Link
              className={`${italiana.className} transition-all duration-300 text-[#D89F55]`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${italiana.className} transition-all duration-300 text-[#D89F55]`}
              href="./About"
            >
              About
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
