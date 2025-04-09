import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ProgressCard from "../DashboardMain/ProgressCard";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

function WaterTrackerPage() {
  const [todayGlasses, setTodayGlasses] = useState(10); // Placeholder value

  const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const dataValues = [8, 10, 9, 10, 7, 9, 11]; // Placeholder data

  const chartData = {
    labels,
    datasets: [
      {
        label: "Water Intake (Glass)",
        data: dataValues,
        fill: true,
        backgroundColor: "rgba(248, 132, 21, 0.1)",
        borderColor: "#f88415",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => ` ${context.parsed.y} Glass`,
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
        ticks: {
          stepSize: 2,
          color: "#f1f1f1",
        },
        grid: {
          color: "#2a2a2a",
        },
      },
    },
  };

  return (
    <div className="w-full">
      <div className=" rounded-md mb-6 px-3">
        <h2 className="text-[4vw] text-white">Total Drank</h2>
        <p className="text-[8vw] font-bold text-[#f88415]">
          {todayGlasses} <span className="text-sm font-normal">glass</span>
        </p>
        <p className="text-sm text-white">Today</p>
      </div>

      <div className="w-full px-3">
        <Line data={chartData} options={chartOptions} />
      </div>
      <div className="mt-5">
        <ProgressCard />
      </div>
    </div>
  );
}

export default WaterTrackerPage;
