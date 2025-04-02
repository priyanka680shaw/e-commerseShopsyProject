import React from "react";

function SkeletonLoader({ count = 6 }) {
  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-4 flex flex-col items-center animate-pulse min-h-[300px] w-full"
        >
          {/* Image Placeholder */}
          <div className="h-[180px] w-full bg-gray-300 rounded-md"></div>

          {/* Title Placeholder */}
          <div className="mt-3 w-[80%] h-6 bg-gray-300 rounded"></div>

          {/* Rating Placeholder */}
          <div className="w-[50%] h-4 bg-gray-300 rounded mt-2"></div>

          {/* Price Placeholder */}
          <div className="w-[40%] h-5 bg-gray-300 rounded mt-2"></div>

          {/* Button Placeholder */}
          <div className="w-[90%] h-10 bg-gray-300 rounded-full mt-3"></div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonLoader;
