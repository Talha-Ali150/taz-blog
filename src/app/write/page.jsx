"use client";

import Image from "next/image";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
// import ReactQuill from "react-quill";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="style">Style</option>
        <option value="fashion">Fashion</option>
        <option value="food">Food</option>
        <option value="culture">Culture</option>
        <option value="travel">Travel</option>
        <option value="coding">Coding</option>
      </select>
      <div className="relative mb-6">
        <button
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setOpen(!open)}
        >
          <Image src="/plus.png" alt="Add" width={16} height={16} />
        </button>
        {open && (
          <div className="absolute flex space-x-4 top-full left-0 mt-2 bg-white p-2 border border-gray-300 rounded-lg shadow-md">
            <label
              htmlFor="image"
              className="cursor-pointer p-2 border border-gray-300 rounded-lg"
            >
              <Image
                src="/image.png"
                alt="Upload Image"
                width={16}
                height={16}
              />
              <input type="file" id="image" style={{ display: "none" }} />
            </label>
            <button className="p-2 border border-gray-300 rounded-lg">
              <Image
                src="/external.png"
                alt="Add Link"
                width={16}
                height={16}
              />
            </button>
            <button className="p-2 border border-gray-300 rounded-lg">
              <Image src="/video.png" alt="Add Video" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className="mt-4"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button
        className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {}}
      >
        Publish
      </button>
    </div>
  );
};

export default WritePage;
