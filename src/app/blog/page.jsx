import CardList from "@/components/CardList";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import React from "react";

export default function BlogPage() {  
  return (
    <div>
      <Navbar />
      <p className="text-center text-white bg-red-300 p-1 rounded-md w-[80%] mt-4 mx-auto">
        Style Blog
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-8 px-4 md:px-8 py-8">
        <div className="w-full md:w-2/3">
          <CardList />
        </div>
        <div className="w-full md:w-1/3">
          <Menu />
        </div>
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
