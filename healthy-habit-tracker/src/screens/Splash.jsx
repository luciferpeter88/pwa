import React from "react";

function SplashScreen() {
  const primary = "#141919";
  const secondary = "#f88415";
  const third = "#232828";
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#141919]">
      <div className="flex flex-col items-center justify-center space-y-6 animate-fadeIn">
        {/* Modern Animated Logo */}
        <div className="w-24 h-24 bg-[#232828] rounded-full flex items-center justify-center shadow-2xl">
          <svg
            className="w-12 h-12 text-[#f88415]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
        {/* App Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#f88415] drop-shadow-md">
          Healthy Habit Tracker
        </h1>
        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-300 opacity-90">
          Empower your daily routine
        </p>
        {/* Refined Spinner */}
        <div className="w-16 h-16 border-4 border-solid border-[#f88415] border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default SplashScreen;
