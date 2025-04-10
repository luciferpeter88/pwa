import React from "react";
import WeeklyGraph from "./components/WeeklyGraph";
import CalendarIcon from "./components/Calendaricon";
import ProgressCard from "../../components/ProgressCard";

const ProfileDashboard = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between px-3">
        <h1 className="text-[5vw] font-bold  text-white">This Week Details</h1>
        <p className="mt-1.5 text-[3vw] text-neutral-500">Total kcal burned</p>
        <CalendarIcon />
      </div>

      <WeeklyGraph />
      <div className="mt-5">
        <ProgressCard />
      </div>
    </React.Fragment>
  );
};

export default ProfileDashboard;
