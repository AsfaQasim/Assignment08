import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Italiana } from "next/font/google";

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
})


const Footer = () => {
  return (
    <div className="bg-[#1A1A1A]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo and Name */}
          <a
            className="flex title-font font-medium items-center md:justify-start justify-center text-[#D89F55] "
            href="/"
          >
            <span className={`${italiana.className} ml-3 text-2xl text-[#D89F55] `}>Flowers Blog ❤️</span>
          </a>

          {/* Footer Text */}

          <div className="text-center mt-4 px-32">
            <p className="text-sm text-[#D89F55] ">
              © 2024 Mastering Flowers Blog. All rights reserved.
            </p>
            <p className="text-sm text-[#D89F55]  mt-2">
              "Celebrating the beauty and symbolism of flowers, inspiring nature
              lovers and gardeners alike."
            </p>
          </div>

          {/* Social Media Links */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Facebook */}
            <Link
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61556456222532"
              className="text-[#D89F55]  w-5 h-5 mr-3"
              aria-label="Facebook"
            >
              <FaFacebook/>
            </Link>

            {/* GitHub */}
            <Link
              target="_blank"
              href="https://github.com/AsfaQasim?tab=repositories"
              className="text-[#D89F55]  w-5 h-5 mr-3"
              aria-label="GitHub"
            >
              <FaGithub/>
            </Link>

            {/* LinkedIn */}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/asifa-muhammad-qasim-006120305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-[#D89F55]  w-5 h-5"
              aria-label="LinkedIn"
            >
              <FaLinkedin/>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
