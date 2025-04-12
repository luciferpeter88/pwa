import React, { useEffect, useState } from "react";
import BrandHeader from "../../components/Header";
import StatsCard from "../../components/StatsCard";
import MetricCard from "../../components/MetricCard";
import ProgressCard from "../../components/ProgressCard";
import fire from "../../assets/fire.png";
import glass from "../../assets/Glass.png";
import steps from "../../assets/Step.png";
import BottomNavigation from "../../components/BottomNavigation";
import { getLoggedInUser } from "../../utils/auth";
import { getTodayValue } from "../../utils/getTodayValue";
import { getDailyProgress } from "../../utils/getDailyProgress";

const FitnessTracker = () => {
  const [calories, setCalories] = useState(0);
  const [water, setWater] = useState(0);
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState({
    calories: 0,
    water: 0,
    steps: 0,
  });
  const [progress, setProgress] = useState({
    calories: 0,
    water: 0,
    steps: 0,
  });
  useEffect(() => {
    async function fetchCalories() {
      const calorieValue = await getTodayValue("calories", "calories");
      const waterValue = await getTodayValue("water", "water");
      const stepValue = await getTodayValue("steps", "steps");
      setWater(waterValue);
      setStep(stepValue);
      setCalories(calorieValue);
    }
    async function fetchProgress() {
      const calorieProgress = await getDailyProgress("calories");
      const waterProgress = await getDailyProgress("water");
      const stepProgress = await getDailyProgress("steps");
      setGoal((prev) => ({
        ...prev,
        calories: calorieProgress.goal,
        water: waterProgress.goal,
        steps: stepProgress.goal,
      }));
      setProgress((prev) => ({
        ...prev,
        calories: calorieProgress.percent,
        water: waterProgress.percent,
        steps: stepProgress.percent,
      }));

      console.log(calorieProgress);
      console.log(waterProgress);
      console.log(stepProgress);
    }

    fetchCalories();
    fetchProgress();
  }, []);
  // get the logged in user
  const { user } = getLoggedInUser();
  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col bg-[#141919]">
        <main className="flex flex-col items-center justify-center px-3 bg-[#141919] h-full mb-3">
          <BrandHeader />
          <h1 className="text-white text-[6vw] font-semi-bold">
            Hi {user?.name}
          </h1>
          <div className="flex flex-col gap-3 w-full mt-3  ">
            <div className="flex flex-col gap-3 w-full">
              <ProgressCard
                progress="Daily"
                type="calorie"
                goal={goal.calories}
                precent={progress.calories}
              />
              <div className="flex gap-3 w-full">
                <StatsCard icon={fire} value={calories} label="Kcal burnt" />
                <div className="flex flex-col gap-3 w-full">
                  <MetricCard
                    icon={glass}
                    value={water}
                    label="Glass water"
                    bgColor="bg-[#232828]"
                    iconBgColor="bg-gray-700"
                  />
                  <MetricCard
                    icon={steps}
                    value={step}
                    label="Step to walk"
                    bgColor="bg-[#232828]"
                    iconBgColor="bg-stone-700"
                  />
                </div>
              </div>
            </div>
            <ProgressCard
              progress="Daily"
              goal={goal.water}
              type="water"
              precent={progress.water}
            />
            <ProgressCard
              progress="Daily"
              goal={goal.steps}
              type="steps"
              precent={progress.steps}
            />
          </div>
        </main>
        <BottomNavigation />
      </div>
    </React.Fragment>
  );
};

export default FitnessTracker;
