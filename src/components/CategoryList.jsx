import React from "react";
import CategoryBadge from "./CategoryBadge";

export default function CategoryList() {
  const data = [
    {
      title: "Style",
      imgSrc:
        "https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "red",
    },
    {
      title: "Fashion",
      imgSrc:
        "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "blue",
    },
    {
      title: "Food",
      imgSrc:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "green",
    },
    {
      title: "Travel",
      imgSrc:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "yellow",
    },
    {
      title: "Culture",
      imgSrc:
        "https://images.pexels.com/photos/1033202/pexels-photo-1033202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "purple",
    },
    {
      title: "Coding",
      imgSrc:
        "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      color: "pink",
    },
  ];
  return (
    <div>
      <h3 className=" text-3xl text-center my-10">Popular Categories</h3>
      <div className="flex items-center justify-evenly">
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
