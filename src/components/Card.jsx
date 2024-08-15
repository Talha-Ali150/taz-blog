import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-10">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={300}
            height={300}
            className="h-48 w-full object-cover md:h-full md:w-48"
            alt="Featured Image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold flex justify-between items-center mb-2">
            <span>11.02.23</span>
            <span className="uppercase text-gray-500">Culture</span>
          </div>
          <h4 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Dive Into the Latest Trends and Insights.
          </h4>
          <p className="mt-2 text-gray-500 text-sm md:text-base">
            There's much more to uncover in this journey. Read on to explore the
            full story, packed with insights, examples, and thoughtful analysis.
          </p>
          <button className="mt-4 px-4 py-2 bg-sky-400 text-white font-medium rounded-lg hover:bg-sky-500 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
