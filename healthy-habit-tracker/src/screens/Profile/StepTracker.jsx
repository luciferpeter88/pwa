import React, { useState } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StepTrackerPage() {
  const [todaySteps, setTodaySteps] = useState(1828);
  const [avgSteps, setAvgSteps] = useState(4516);

  // Dummy data
  const hourlyLabels = ["12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];
  const hourlySteps = [500, 300, 1828, 700, 2500, 2300, 1800];

  const weeklyLabels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const weeklySteps = [4200, 4500, 4800, 4000, 5000, 4600, 4600];

  const hourlyChartData = {
    labels: hourlyLabels,
    datasets: [
      {
        label: "Steps",
        data: hourlySteps,
        backgroundColor: "#f88415",
        borderRadius: 4,
        barThickness: 20,
      },
    ],
  };

  const weeklyChartData = {
    labels: weeklyLabels,
    datasets: [
      {
        label: "Steps per Day",
        data: weeklySteps,
        backgroundColor: "#f88415",
        borderRadius: 4,
        barThickness: 16,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
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
        ticks: { color: "#f1f1f1" },
        grid: { color: "#2a2a2a" },
      },
    },
  };

  return (
    <div className="bg-[#141919] space-y-4 px-3">
      {/* Top: Today Summary */}
      <div className="">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-[4vw] text-white">Total Steps</h2>
            <p className="text-[7vw] font-bold text-[#f88415]">
              {todaySteps.toLocaleString()}{" "}
              <span className="text-sm font-normal">steps</span>
            </p>
            <p className="text-[4vw] text-white">Today</p>
          </div>
          <div className="text-gray-500">📅</div>
        </div>
        <Bar data={hourlyChartData} options={chartOptions} />
      </div>

      {/* Highlights */}
      <div className="">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[4vw] font-semibold text-white"> Steps</h2>
          <button className="text-xs text-[#f88415]">Clear</button>
        </div>
        <p className="text-[3vw] text-white mb-1">
          Your averaged{" "}
          <span className="text-[#f88415] font-[3vw]">
            {avgSteps.toLocaleString()}
          </span>{" "}
          steps a day over the last 7 days
        </p>

        <div className="mt-3">
          <Bar data={weeklyChartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
}

export default StepTrackerPage;
