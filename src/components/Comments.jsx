import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <p className="text-xl font-semibold mb-4">Comments</p>
      
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <textarea
          className="p-2 w-full md:w-[70%] lg:w-[80%] h-24 resize-none rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Write a comment"
        ></textarea>
        <button className="mt-3 md:mt-0 px-4 py-2 bg-sky-400 text-white font-medium rounded-lg hover:bg-sky-500 transition duration-300">
          Send
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
          <Image
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={50}
            height={50}
            className="rounded-full object-cover"
            alt="user image"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-800">John Doe</p>
              <p className="text-sm text-gray-500">01.01.2023</p>
            </div>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              officiis nam hic adipisci laudantium ex expedita saepe numquam
              iure praesentium!
            </p>
          </div>
        </div>

        {/* Repeat the comment block for additional comments */}
        <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
          <Image
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={50}
            height={50}
            className="rounded-full object-cover"
            alt="user image"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-800">Jane Smith</p>
              <p className="text-sm text-gray-500">02.01.2023</p>
            </div>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
