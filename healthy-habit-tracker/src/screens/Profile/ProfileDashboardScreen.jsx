import React from "react";
import HabitChart from "./components/HabitChart";
const ProfileDashboard = () => {
  // dammy data for calories if the API is not available
  const dummyCalories = {
    label: "Calories",
    goal: 1800,
    data: [1500, 2000, 1750, 2800, 1600, 1900, 1700],
    unit: "kcal",
  };
  return (
    <React.Fragment>
      <div className="flex justify-between px-3">
        <h1 className="text-[5vw] font-bold  text-white">This Week Details</h1>
      </div>

      <HabitChart habit="calories" dummyData={dummyCalories} />
    </React.Fragment>
  );
};

export default ProfileDashboard;
