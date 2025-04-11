import React, { useEffect, useState } from "react";
// import fetchHabitsFromDB from "../utils/fetchAllHabit";
// import fetchNapFromDB from "../utils/fetchNap";

import FitnessTracker from "./DashboardMain/DashboardScreen";

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
  return <FitnessTracker />;
};

export default Dashboard;
