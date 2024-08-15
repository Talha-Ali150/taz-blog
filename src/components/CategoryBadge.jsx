import Image from "next/image";
import React from "react";

export default function CategoryBadge({ title, imgSrc, color }) {
  const colorClasses = {
    red: "bg-red-300",
    blue: "bg-blue-300",
    green: "bg-green-300",
    yellow: "bg-yellow-300",
    purple: "bg-purple-300",
    pink: "bg-pink-300",
  };

  return (
    <div
      className={`flex justify-center items-center ${colorClasses[color]} w-40 p-2 rounded-lg shadow-md my-10`}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={imgSrc}
          width={48}
          height={48}
          alt={title}
          className="object-cover"
        />
      </div>
      <p className="ml-3 text-white font-medium">{title}</p>
    </div>
  );
}