import React from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/StatsCard";
import MetricCard from "../../components/MetricCard";
import ProgressCard from "../../components/ProgressCard";
import fire from "../../assets/fire.png";
import glass from "../../assets/Glass.png";
import steps from "../../assets/Step.png";
function DailyGoals() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#141919] min-h-screen text-white p-4 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6 mt-5">
        <button className="text-xl" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="text-md font-semibold">Daily Goal</h2>
        <button className="text-sm text-[#f88415] font-medium">Save</button>
      </div>
      <div className="flex flex-col gap-3 w-full mt-3  ">
        <div className="flex flex-col gap-3 w-full">
          <ProgressCard />
          <div className="flex gap-3 w-full">
            <StatsCard icon={fire} value="2,000" label="Kcal burnt" />
            <div className="flex flex-col gap-3 w-full">
              <MetricCard
                icon={glass}
                value="10"
                label="Glass water"
                bgColor="bg-[#232828]"
                iconBgColor="bg-gray-700"
              />
              <MetricCard
                icon={steps}
                value="5,000"
                label="Step to walk"
                bgColor="bg-[#232828]"
                iconBgColor="bg-stone-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyGoals;
