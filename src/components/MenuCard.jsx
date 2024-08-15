import Image from "next/image";
import React from "react";

export default function MenuCard() {
  return (
    <div className="flex items-start bg-white rounded-lg  p-4 gap-4">
      <div>
        <Image
          src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={50}
          height={50}
          className="rounded-lg object-cover"
          alt="Featured Image"
        />
      </div>
      <div className="flex-1">
        <div className="mb-2">
          <p className="text-sm font-semibold text-white bg-red-300 w-max rounded-lg p-1">Travel</p>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          <span>John Doe - </span>
          <span>10.03.23</span>
        </div>
      </div>
    </div>
  );
}
