import Image from "next/image";
import React from "react";
import { colorClasses } from "@/constants/colorClasses";

export default function CategoryBadge({ title, imgSrc, color }) {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-center items-center ${colorClasses[color]} p-4 rounded-lg shadow-md my-4 w-full sm:w-40`}
    >
      <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full overflow-hidden">
        <Image
          src={imgSrc}
          width={64}
          height={64}
          alt={title}
          className="object-cover"
        />
      </div>
      <p className="mt-4 sm:mt-0 sm:ml-3 text-white font-medium text-center sm:text-left">
        {title}
      </p>
    </div>
  );
}
