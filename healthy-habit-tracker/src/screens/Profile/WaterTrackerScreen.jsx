import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getWeeklyHabitData } from "../../utils/getWeeklyHabitData";
import { getDailyProgress } from "../../utils/getDailyProgress";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

function WaterTrackerPage() {
  const [todayGlasses, setTodayGlasses] = useState(0);
  const [weeklyData, setWeeklyData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch weekly water intake data (an array of numbers for 7 days)
      const weekly = await getWeeklyHabitData("water", "water");
      // Fetch today's water progress (object with current, goal, percent)
      const progress = await getDailyProgress("water");
      // Update today's water intake
      setTodayGlasses(progress.current);
      // Update weekly data (if no data is found, it may remain an empty array)
      setWeeklyData(weekly);
      // Set the labels—for simplicity, a fixed order:
      setChartLabels(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);
    }
    fetchData();
  }, []);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Water Intake (Glass)",
        data: weeklyData,
        fill: true,
        backgroundColor: "rgba(248, 132, 21, 0.1)",
        borderColor: "#f88415",
        tension: 0.4,
        pointRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => `Day: ${tooltipItems[0].label}`, // Shows the day from the labels array.
          label: (context) => `Water: ${context.parsed.y} Glass`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#f1f1f1" },
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 2, color: "#f1f1f1" },
        grid: { color: "#2a2a2a" },
      },
    },
  };

  return (
    <div className="w-full">
      <div className="rounded-md mb-6 px-3">
        <h2 className="text-[4vw] text-white">Total Drank</h2>
        <p className="text-[8vw] font-bold text-[#f88415] flex items-baseline">
          {todayGlasses} <span className="text-sm font-normal">glass</span>
        </p>
        <p className="text-sm text-white">Today</p>
      </div>
      <div className="w-full px-3">
        {weeklyData.length === 0 ? (
          <p className="text-gray-400">No data found for this week.</p>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
}

export default WaterTrackerPage;
