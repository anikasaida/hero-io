import React from "react";

const LoadingDetails = ({ count = 1 }) => {
  return (
    <div className="">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="flex gap-8 items-center">
            <div className="skeleton h-32 w-[170px]"></div>
            <div className="space-y-4">
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingDetails;
