import React from "react";
import Card from "./Card";

export const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

const CardList = async ({ page }) => {
  const { posts } = await getData(page);
  return (
    <div>
      <h3 className="text-center text-3xl mt-10">Recent Posts</h3>
      {posts?.map((item) => {
        return <Card key={item._id} item={item} />;
      })}
    </div>
  );
};
export default CardList;
