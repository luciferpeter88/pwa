import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header / Top Bar */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">Dashboard</h1>
        {/* Could be an icon or avatar for user profile */}
        <button className="bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-semibold">
          Menu
        </button>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Daily Habits Card */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              Daily Habits
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              2/5 habits completed today
            </p>
            <button className="mt-4 bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
              Go to Habits
            </button>
          </section>

          {/* Sleep Tracking Card */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              Sleep Summary
            </h2>
            <p className="text-sm text-gray-300 mt-1">7h 20m last night</p>
            <button className="mt-4 bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
              Track Sleep
            </button>
          </section>

          {/* Fitness & Nutrition Card */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              Fitness & Nutrition
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Calories: 1,200 | Steps: 5,000
            </p>
            <button className="mt-4 bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition">
              View Details
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
