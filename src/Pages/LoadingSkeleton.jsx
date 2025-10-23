
import React from "react";

const LoadingSkeleton = ({ count = 15 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5">
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse h-40 bg-gray-200 rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
