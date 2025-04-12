import React, { useState, useEffect } from "react";
import { getWeeklyTotals } from "../../../utils/getWeeklyTotals";
import { stepsToDistance } from "../../../utils/stepsToDistance";

function MetricItem({ value, label }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <h2 className="text-[6.5vw] font-bold">{value}</h2>
      <p className="text-[3vw] text-[#f88415]">{label}</p>
    </div>
  );
}

function MetricsGrid() {
  // per week
  const [total, setTotal] = useState({
    totalSteps: 0,
    totalWater: 0,
    totalDistance: 0,
  });
  useEffect(() => {
    async function fetchData() {
      const s = await getWeeklyTotals("steps", "steps");
      const w = await getWeeklyTotals("water", "water");
      // const c = await getWeeklyTotals("calories", "calories");
      setTotal((prev) => ({
        ...prev,
        totalSteps: s,
        totalWater: w,
        totalDistance: stepsToDistance(s),
      }));
    }

    fetchData();
  }, []);
  console.log(total);
  return (
    <section className="flex justify-between items-start px-4 mt-8">
      <MetricItem value={total.totalDistance + " m"} label="Distance" />
      <MetricItem value={total.totalSteps} label="Steps" />
      <MetricItem value={total.totalWater + " glasses"} label="Drink Water" />
    </section>
  );
}

export default MetricsGrid;
