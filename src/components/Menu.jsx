import React from "react";
import MenuCard from "./MenuCard";
import { data } from "@/constants/data";
import { colorClasses } from "@/constants/colorClasses";

export default function Menu() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h3 className="text-base font-normal text-gray-500">What's Hot</h3>
      <h3 className="text-xl font-semibold mb-4">Most Popular</h3>

      <div className="space-y-4">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>

      <h3 className="text-base font-normal text-gray-500 mt-6">
        Discover by Topic
      </h3>
      <h3 className="text-xl font-semibold mb-4">Categories</h3>

      <div className="space-y-2">
        {data.map((item, index) => (
          <p
            key={index}
            className={`px-4 py-2 rounded-md text-white ${
              colorClasses[item.color]
            }`}
          >
            {item.title}
          </p>
        ))}
      </div>

      <h3 className="text-base font-normal text-gray-500 mt-6">
        Chosen by the editor
      </h3>
      <h3 className="text-xl font-semibold mb-4">Editor's Pick</h3>
      <div>
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    </div>
  );
}
