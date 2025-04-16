import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/StatsCard";
import MetricCard from "../../components/MetricCard";
import fire from "../../assets/Fire.png";
import glass from "../../assets/Glass.png";
import steps from "../../assets/Step.png";
import { getDailyGoal } from "../../utils/goalService";
import { getLoggedInUser } from "../../utils/auth";

const quotes = [
  "Progress over perfection.",
  "Just show up. The rest will follow.",
  "Discipline > motivation.",
  "Stay hydrated and focused ",
  "Small steps, big changes.",
  "Every step counts — literally!",
];

function DailyGoals() {
  const [value, setValue] = useState({});
  // useState to trigger re-render when goal is updated
  const [render, setRender] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % quotes.length);
        setFade(true); // fade in
      }, 500); // fade out duration
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-[#141919] via-[#1c1f1f] to-[#101111] min-h-screen text-white p-4 flex flex-col items-center">
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl -translate-x-1/2"></div>

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
      <div
        className={`mt-10 text-center text-sm text-[#f88415] italic tracking-wide transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {quotes[quoteIndex]}
      </div>
    </div>
  );
}

export default DailyGoals;
