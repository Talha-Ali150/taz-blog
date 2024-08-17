import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

export default function SinglePage() {
  return (
    <div>
      <Navbar />
      <div className="w-[90%] sm:w-[85%] md:w-[80%] mx-auto p-4">
        {/* Post Title and Author Info */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Image
              alt="author"
              src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">William Randolph</p>
              <p className="text-gray-500">25 April, 2023</p>
            </div>
          </div>
        </div>

        {/* Post Image */}
        <div className="mb-8">
          <Image
            alt="blog"
            src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Post Content */}
        <div className="flex flex-col md:flex-row">
          <div className="text-lg leading text-gray-700 md:w-2/3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda tempora error esse, id exercitationem nisi magni beatae
              at laborum eligendi. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Assumenda tempora error esse, id exercitationem
              nisi magni beatae at laborum eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda tempora error esse, id exercitationem nisi magni beatae
              at laborum eligendi. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Assumenda tempora error esse, id exercitationem
              nisi magni beatae at laborum eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda tempora error esse, id exercitationem nisi magni beatae
              at laborum eligendi. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Assumenda tempora error esse, id exercitationem
              nisi magni beatae at laborum eligendi.
            </p>
            <Comments/>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}
