import React from "react";
import CategoryBadge from "./CategoryBadge";
import { data } from "@/constants/data";

export default function CategoryList() {
  return (
    <div>
      <h3 className="text-3xl text-center my-10">Popular Categories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {data.map((item, index) => (
          <CategoryBadge
            key={index}
            title={item.title}
            imgSrc={item.imgSrc}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
}
