import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/StatsCard";
import MetricCard from "../../components/MetricCard";
import fire from "../../assets/Fire.png";
import glass from "../../assets/Glass.png";
import steps from "../../assets/Step.png";
import { getDailyGoal } from "../../utils/goalService";
import { getLoggedInUser } from "../../utils/auth";

function DailyGoals() {
  const [value, setValue] = useState({});
  // useState to trigger re-render when goal is updated
  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  const { userID } = getLoggedInUser();
  useEffect(() => {
    if (userID) {
      // get the daily goal from the database using helper function based on userID
      getDailyGoal(userID).then((goal) => {
        if (goal) {
          setValue(goal);
        }
      });
    }
  }, [userID, render]);

  return (
    <div className="bg-[#141919] min-h-screen text-white p-4 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-6 mt-5">
        <button className="text-xl" onClick={() => navigate(-1)}>
          ←
        </button>
        <h2 className="text-md font-semibold">Daily Goal</h2>
      </div>
      <div className="flex flex-col gap-3 w-full mt-3  ">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex gap-3 w-full mt-10">
            <StatsCard
              icon={fire}
              value={value?.calorieGoal || 0}
              label="Kcal burnt"
              settings={true}
              type="calorie"
              setRender={setRender}
            />
            <div className="flex flex-col gap-3 w-full">
              <MetricCard
                icon={glass}
                value={value?.waterGoal || 0}
                label="Glass water"
                bgColor="bg-[#232828]"
                iconBgColor="bg-gray-700"
                settings={true}
                type="water"
                setRender={setRender}
              />
              <MetricCard
                icon={steps}
                value={value?.stepGoal || 0}
                label="Step to walk"
                bgColor="bg-[#232828]"
                iconBgColor="bg-stone-700"
                settings={true}
                type="step"
                setRender={setRender}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyGoals;
