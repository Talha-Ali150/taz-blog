import React from "react";

export default function Pagination() {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
        Previous
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
        Next
      </button>
    </div>
  );
}
