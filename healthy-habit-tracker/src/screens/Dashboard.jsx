import React from "react";
import WeeklyProgress from "../components/WeeklyProgress";
import DashboardCard from "../components/DashboardCard";
import Widget from "../components/Widget";

const Dashboard = () => {
  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header / Top Bar */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-lg font-bold">Dashboard</h1>
      </header>
      <WeeklyProgress />

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Daily Habits Card */}
          <DashboardCard
            title="Daily Habits"
            to="/daily-habit"
            buttonText="Details"
          >
            <Widget
              strokeDashoffset={176 * (1 - 0.4)}
              precent="40%"
              text="2 of 5 habits completed today"
            />
          </DashboardCard>

          {/* Sleep Tracking Card */}

          <DashboardCard
            title="Sleep Summary"
            to="/sleep-tracking"
            buttonText="Details"
          >
            <Widget
              strokeDashoffset={176 * (1 - 0.92)}
              precent="92%"
              text={
                <div>
                  <p>Slept: 7h 20m</p>
                  <p>Goal: 8h</p>
                </div>
              }
            />
          </DashboardCard>

          {/* Fitness & Nutrition Card */}
          <DashboardCard
            title="Fitness & Nutrition"
            to="/fittness-nutrition"
            buttonText="Details"
          >
            <Widget
              strokeDashoffset={176 * (1 - 0.66)}
              precent="66%"
              text={
                <div>
                  <p> Calories: 1200 / 1800</p>
                  <p>Steps: 5000 / 8000</p>
                </div>
              }
            />
          </DashboardCard>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
