import React from "react";

import HabitChart from "./components/HabitChart";

function StepTrackerPage() {
  const dummySteps = {
    label: "Steps",
    goal: 3000,
    data: [3500, 2200, 2900, 3000, 4100, 3700, 2800],
    unit: "steps",
  };

  return <HabitChart habit="steps" dummyData={dummySteps} />;
}

export default StepTrackerPage;
