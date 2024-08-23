import React from "react";
import Card from "./Card";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

const CardList = async () => {
  const data = await getData();
  return (
    <div>
      <h3 className="text-center text-3xl mt-10">Recent Posts</h3>
      {data.map((item) => {
        return <Card key={item._id} />;
      })}
    </div>
  );
};
export default CardList;
