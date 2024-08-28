"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();

  const handleNavigation = (newPage) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <button
        disabled={!hasPrev}
        className={`${
          !hasPrev ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
        } text-white py-2 px-4 rounded transition-colors duration-300`}
        onClick={() => handleNavigation(page - 1)}
        aria-label="Previous Page"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={`${
          !hasNext ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"
        } text-white py-2 px-4 rounded transition-colors duration-300`}
        onClick={() => handleNavigation(page + 1)}
        aria-label="Next Page"
      >
        Next
      </button>
    </div>
  );
}
