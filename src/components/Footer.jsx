"use client";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <div className="flex items-center mb-4">
            <Image alt="logo" src="/logo.png" width={70} height={70} />
            <p className="ml-3 text-xl font-semibold">Taz Blog</p>
          </div>
          <p className="text-gray-600 text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            tempora error esse, id exercitationem nisi magni beatae at laborum
            eligendi.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-around mt-8 md:mt-0 w-full md:w-2/3">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h4 className="font-bold mb-3">Links</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>Homepage</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h4 className="font-bold mb-3">Tags</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>Style</li>
              <li>Fashion</li>
              <li>Coding</li>
              <li>Travel</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold mb-3">Social</h4>
            <ul className="list-none space-y-2 text-gray-700">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>TikTok</li>
              <li>YouTube</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center mt-8">
        <div className="flex gap-4">
          <Image
            src={require("../../public/facebook.png")}
            alt="Facebook logo"
            width={20}
            height={20}
          />
          <Image
            src={require("../../public/instagram.png")}
            alt="Instagram logo"
            width={20}
            height={20}
          />
          <Image
            src={require("../../public/tiktok.png")}
            alt="TikTok logo"
            width={20}
            height={20}
          />
          <Image
            src={require("../../public/youtube.png")}
            alt="YouTube logo"
            width={20}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
