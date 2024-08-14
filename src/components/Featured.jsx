import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <div className="p-8 bg-gray-100">
      <div className="mb-8 text-center">
        <h1 className="text-6xl font-bold">Where Thoughts Become Stories.</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <Image
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            alt="Featured Image"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-semibold mb-4">
            Dive Into the Latest Trends and Insights.
          </h2>
          <p className="text-base mb-6">
            There's much more to uncover in this journey. Read on to explore the
            full story, packed with insights, examples, and thoughtful analysis.
          </p>
          <button className="px-6 py-3 bg-sky-400 text-white font-medium rounded-lg hover:bg-sky-500 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
