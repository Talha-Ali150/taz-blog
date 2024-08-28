import React from "react";
import "./CategoryList.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/categories/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div>
      <h3 className="text-3xl text-center my-10">Popular Categories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {data?.map((item) => (
          <Link href={`/blog?cat=${item.slug}`}>
            <div
              className={`flex flex-col sm:flex-row justify-center items-center  p-4 rounded-lg shadow-md my-4 w-full sm:w-40 ${item.slug}`}
              key={item._id}
            >
              <div className="w-16 h-16 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                {item.img && (
                  <Image
                    src={item.img}
                    width={64}
                    height={64}
                    alt={item.title}
                    className="object-cover"
                  />
                )}
              </div>
              <p className="mt-4 sm:mt-0 sm:ml-3 text-white font-medium text-center sm:text-left">
                {item.title}
              </p>
            </div>
          </Link>
        ))}

        {/* <CategoryBadge
          title="Style"
          imgSrc="https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          color="bg-red-300"
        />
        <CategoryBadge
          title="Fashion"
          imgSrc="https://images.pexels.com/photos/792385/pexels-photo-792385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          color="bg-blue-300"
        /> */}
      </div>
    </div>
  );
};

export default CategoryList;
