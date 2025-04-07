import React from "react";
import { Link } from "react-router-dom";
import useSleepTracker from "../hooks/useSleepTracker";

function SleepTracking() {
  const { tracking, startTime, handleToggle } = useSleepTracker();

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">Sleep Tracking</h1>
        <Link to="/sleep-history" className="text-sm text-[#f88415]">
          History
        </Link>
      </header>
      {/* Main Content */}
      <main className="p-4 flex-1 flex items-center justify-center">
        <div className="bg-[#232828] rounded-md p-6 shadow-md w-full max-w-md text-center">
          <h2 className="text-[#f88415] text-xl font-semibold mb-4">
            Monitor Your Sleep
          </h2>
          {tracking ? (
            <div className="mb-4">
              <p className="text-lg">Sleep tracking is active</p>
              <p className="text-sm text-gray-300">
                Started at: {startTime ? startTime.toLocaleTimeString() : ""}
              </p>
            </div>
          ) : (
            <p className="mb-4 text-lg">
              Press start to begin tracking your sleep
            </p>
          )}
          <button
            onClick={handleToggle}
            className="bg-[#f88415] text-[#141919] px-6 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            {tracking ? "Stop Tracking" : "Start Tracking"}
          </button>
        </div>
      </main>
      <Link to="/" className="text-[#f88415] text-sm p-4">
        Back to Dashboard
      </Link>
    </div>
  );
}

export default SleepTracking;
