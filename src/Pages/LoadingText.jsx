import React from "react";


const LoadingText = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-5xl font-bold text-blue-600 flex items-center gap-2 animate-pulse">
        L
        <img
          src="https://i.ibb.co.com/rf3fWM96/logo.png"
          alt="loading-icon"
          className="w-10 h-10 inline-block object-contain animate-spin"
        />
        oading...
      </h1>

      <div className="w-48 h-2 bg-blue-400 rounded-full mt-5 animate-pulse"></div>
    </div>
  );
};

export default LoadingText;

