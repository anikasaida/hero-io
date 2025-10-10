// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-purple-300">
      {/* Spinner */}
      <div className="relative w-20 h-20">
        <div className="absolute border-4 border-purple-300 border-t-transparent rounded-full w-20 h-20 animate-spin"></div>
        <div className="absolute border-4 border-purple-500 border-t-transparent rounded-full w-16 h-16 animate-spin animation-delay-200"></div>
        <div className="absolute border-4 border-purple-700 border-t-transparent rounded-full w-12 h-12 animate-spin animation-delay-400"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-white text-xl font-semibold animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
