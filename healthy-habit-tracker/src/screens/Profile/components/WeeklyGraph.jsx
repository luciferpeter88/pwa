import React, { useEffect, useState } from "react";
import { db } from "../../../utils/db";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  generateCaloriesChartData,
  baseChartOptions,
} from "../../../utils/generateCaloriesChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CalorieBurnedPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const all = await db.calories?.toArray();
      const grouped = {};
      if (!all) return;
      for (const entry of all) {
        if (!grouped[entry.date]) grouped[entry.date] = 0;
        grouped[entry.date] += entry.calories;
      }
      const sorted = Object.entries(grouped)
        .map(([date, calories]) => ({ date, calories }))
        .sort((a, b) => a.date.localeCompare(b.date));

      setData(sorted);
    }
    fetchData();
  }, []);

  const labels = data.map((entry) => {
    const date = new Date(entry.date);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  });
  // Calculate total calories burned
  const totalCalories = data.reduce((acc, entry) => acc + entry.calories, 0);
  // Generate chart data
  const chartData = generateCaloriesChartData(data, labels);
  return (
    <div className="text-gray-100 px-3">
      <p className="text-[7vw] font-bold text-[#f88415] flex items-baseline justify-between">
        {totalCalories} kcal
        <span className=" text-[4vw] font-bold mb-6 text-white">
          Calorie Burned
        </span>
      </p>

      <div className="rounded-md">
        {data.length === 0 ? (
          <p className="text-gray-400">No data found for this week.</p>
        ) : (
          <Bar data={chartData} options={baseChartOptions} />
        )}
      </div>
    </div>
  );
}

export default CalorieBurnedPage;
