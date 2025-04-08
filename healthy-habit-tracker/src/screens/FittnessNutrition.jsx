import React from "react";
import { Link } from "react-router-dom";
import Widget from "../components/Widget"; // feltételezzük, hogy a Widget komponens már létezik

function FitnessNutrition() {
  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">
          Fitness & Nutrition
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Steps Widget */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#f88415] text-xl font-semibold">
                Step Tracker
              </h2>
              <Link to="/steps">
                <button className="bg-[#f88415] text-[#141919] px-3 py-1 rounded-md text-sm font-medium hover:opacity-90 transition">
                  View
                </button>
              </Link>
            </div>
            <Widget
              strokeDashoffset={176 * (1 - 0.65)}
              precent="65%"
              text="5,200 / 8,000 steps"
            />
          </section>

          {/* Calorie Tracker Widget */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#f88415] text-xl font-semibold">
                Calorie Tracker
              </h2>
              <Link to="/calories">
                <button className="bg-[#f88415] text-[#141919] px-3 py-1 rounded-md text-sm font-medium hover:opacity-90 transition">
                  View
                </button>
              </Link>
            </div>
            <Widget
              strokeDashoffset={176 * (1 - 0.6)}
              precent="60%"
              text="1,200 / 2,000 kcal"
            />
          </section>

          {/* Maintenance Calories Widget */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#f88415] text-xl font-semibold">
                Maintenance Calories
              </h2>
              <Link to="/maintenance">
                <button className="bg-[#f88415] text-[#141919] px-3 py-1 rounded-md text-sm font-medium hover:opacity-90 transition">
                  View
                </button>
              </Link>
            </div>
            <Widget
              strokeDashoffset={176 * (1 - 1)}
              precent="100%"
              text="Goal: 2,000 kcal"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default FitnessNutrition;
