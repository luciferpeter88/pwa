import React, { useEffect, useState } from "react";
import WeeklyProgress from "../components/WeeklyProgress";
import DashboardCard from "../components/DashboardCard";
import Widget from "../components/Widget";
import fetchHabitsFromDB from "../utils/fetchAllHabit";
import fetchNapFromDB from "../utils/fetchNap";

import FitnessTracker from "./DashboardMain/FitnessTracker";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [habits, setHabits] = useState({});
  const [nap, setNap] = useState({});
  useEffect(() => {
    async function fetchData() {
      // fetch all habits from the database
      const all = await fetchHabitsFromDB();
      const nap = await fetchNapFromDB();
      // get format of "2025-04-07", return today's date
      const today = new Date().toISOString().split("T")[0];
      // updarteve the state with the habits for today
      console.log("all", all);

      setHabits(all[today]);
      setNap(nap);
      setLoading(false);
    }
    fetchData();
  }, []);
  // if the habits are not loaded yet, do not show the progress

  const completedCount =
    loading || habits === undefined
      ? null
      : habits.filter((h) => h.completed).length;
  // count the number of habits
  const progress = (completedCount / habits?.length) * 100;
  // calculate the strokeDashoffset for the circle
  const strokeDashoffset = 176 * (1 - progress / 100);
  const percent = `${progress.toFixed(0)}%`;
  const text = `${completedCount} of ${habits?.length} habits completed today`;
  console.log(habits);
  return (
    // <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
    //   {/* Header / Top Bar */}
    //   <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
    //     <h1 className="text-[#f88415] text-lg font-bold">Dashboard</h1>
    //   </header>
    //   <WeeklyProgress />

    //   <main className="p-4 flex-1 overflow-y-auto">
    //     <div className="space-y-6">
    //       <DashboardCard
    //         title="Daily Habits"
    //         to="/daily-habit"
    //         buttonText="Details"
    //       >
    //         <Widget
    //           strokeDashoffset={strokeDashoffset || 0}
    //           precent={progress ? percent : "0%"}
    //           text={completedCount ? text : "No habit's for today"}
    //         />
    //       </DashboardCard>

    //       <DashboardCard
    //         title="Nap Summary"
    //         to="/sleep-tracking"
    //         buttonText="Details"
    //       >
    //         <Widget
    //           strokeDashoffset={176 * (1 - 1)}
    //           precent="100%"
    //           text={<p>Slept: {nap[nap.length - 1]?.durationMinutes}minutes</p>}
    //         />
    //       </DashboardCard>

    //       <DashboardCard
    //         title="Fitness & Nutrition"
    //         to="/fittness-nutrition"
    //         buttonText="Details"
    //       >
    //         <Widget
    //           strokeDashoffset={176 * (1 - 0.66)}
    //           precent="66%"
    //           text={
    //             <div>
    //               <p> Calories: 1200 / 1800</p>
    //               <p>Steps: 5000 / 8000</p>
    //             </div>
    //           }
    //         />
    //       </DashboardCard>
    //     </div>
    //   </main>
    //   <FitnessTracker />
    // </div>
    <FitnessTracker />
  );
};

export default Dashboard;
