import React from "react";
import BrandHeader from "./Header";
import StatsCard from "./StatsCard";
import MetricCard from "./MetricCard";
import ProgressCard from "./ProgressCard";
import WorkoutCard from "./WorkoutCard";
import fire from "../../assets/fire.png";
import glass from "../../assets/Glass.png";
import steps from "../../assets/Step.png";
import BottomNavigation from "./BottomNavigation";

const FitnessTracker = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col bg-[#141919]">
        <main className="flex flex-col items-center justify-center px-3 bg-[#141919] h-full mb-3">
          <BrandHeader />
          <h1 className="text-white text-[8vw] font-semi-bold">Hi Peter</h1>
          <div className="flex flex-col gap-3 w-full mt-3  ">
            <div className="flex flex-col gap-3 w-full">
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
            <ProgressCard />
            <ProgressCard />
          </div>
        </main>
        <BottomNavigation />
      </div>
    </React.Fragment>
  );
};

export default FitnessTracker;
