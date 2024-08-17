"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AuthLinks from "./AuthLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar") && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col justify-between items-center p-4 bg-white shadow-md md:flex-row ">
      {/* Social Media Icons */}
      <div className="flex flex-1 justify-center gap-4 sm:gap-6">
        <Image
          src={require("../../public/facebook.png")}
          alt="Facebook logo"
          width={30}
          height={30}
        />
        <Image
          src={require("../../public/instagram.png")}
          alt="Instagram logo"
          width={30}
          height={30}
        />
        <Image
          src={require("../../public/tiktok.png")}
          alt="TikTok logo"
          width={30}
          height={30}
        />
        <Image
          src={require("../../public/youtube.png")}
          alt="YouTube logo"
          width={30}
          height={30}
        />
      </div>

      {/* Logo */}
      <div className="flex flex-1 justify-center">
        <Image alt="Logo" src="/logo.png" width={150} height={20} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-1 justify-center list-none gap-6 text-gray-700 font-semibold">
        <li className="hover:text-blue-500 cursor-pointer">Homepage</li>
        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        <li className="hover:text-blue-500 cursor-pointer">About</li>
        <AuthLinks />
      </ul>

      {/* Mobile Menu Toggle Button */}
      <div className="flex flex-1 justify-center md:hidden">
        <button onClick={toggleMenu} className="flex flex-col gap-1">
          <div className="bg-black w-6 h-0.5"></div>
          <div className="bg-black w-6 h-0.5"></div>
          <div className="bg-black w-6 h-0.5"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white md:hidden flex flex-col items-center gap-4 py-4 shadow-lg z-10">
          <li className="list-none text-gray-700 font-semibold hover:text-blue-500 cursor-pointer">
            Homepage
          </li>
          <li className="list-none text-gray-700 font-semibold hover:text-blue-500 cursor-pointer">
            Contact
          </li>
          <li className="list-none text-gray-700 font-semibold hover:text-blue-500 cursor-pointer">
            About
          </li>
          <AuthLinks />
        </div>
      )}
    </nav>
  );
}
