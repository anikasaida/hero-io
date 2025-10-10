import React from "react";

const LoadingText = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Boro Loading Text */}
      <h1 className="text-5xl font-bold text-purple-600 animate-pulse mb-5">
        Loading...
      </h1>
      {/* Animation Bar */}
      <div className="w-48 h-2 bg-purple-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default LoadingText;
