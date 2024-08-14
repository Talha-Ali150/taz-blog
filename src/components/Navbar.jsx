'use client'
import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex flex-1 justify-center">social icons</div>
      <div className="flex flex-1 justify-center">logo</div>
      <div className="hidden md:flex flex-1 justify-center list-none gap-6">
        <li>Homepage</li>
        <li>Contact</li>
        <li>About</li>
        <li>Login</li>
      </div>
      <div className="flex flex-1 justify-center md:hidden">
        <button onClick={toggleMenu} className="flex flex-col gap-1">
          <div className="bg-black w-6 h-0.5"></div>
          <div className="bg-black w-6 h-0.5"></div>
          <div className="bg-black w-6 h-0.5"></div>
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white md:hidden flex flex-col items-center gap-4 py-4">
          <li className="list-none">Homepage</li>
          <li className="list-none">Contact</li>
          <li className="list-none">About</li>
          <li className="list-none">Login</li>
        </div>
      )}
    </div>
  );
}
