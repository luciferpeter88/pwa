import React from "react";
import WeeklyGraph from "./WeeklyGraph";
import CalendarIcon from "./Calendaricon";
import ProgressCard from "../DashboardMain/ProgressCard";

const ProfileDashboard = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <h1 className="text-[5vw] font-bold leading-7 text-white">
          This Week Details
        </h1>
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
