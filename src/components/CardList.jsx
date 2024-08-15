import React from "react";
import Card from "./Card";

export default function CardList() {
  return (
    <div>
      <h3 className="text-center text-3xl mt-10">Recent Posts</h3>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
