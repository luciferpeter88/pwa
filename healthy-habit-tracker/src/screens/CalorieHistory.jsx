import React, { useEffect, useState } from "react";
import { db } from "../utils/db";
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

function CalorieHistoryPage() {
  const [dailyTotals, setDailyTotals] = useState([]);

  useEffect(() => {
    async function fetchCalorieData() {
      const all = await db.calories.toArray();
      const grouped = {};

      for (const entry of all) {
        if (!grouped[entry.date]) grouped[entry.date] = 0;
        grouped[entry.date] += entry.calories;
      }

      const sorted = Object.entries(grouped)
        .map(([date, total]) => ({ date, total }))
        .sort((a, b) => b.date.localeCompare(a.date));

      setDailyTotals(sorted);
    }
    fetchCalorieData();
  }, []);

  const chartData = {
    labels: dailyTotals.map((e) => e.date),
    datasets: [
      {
        label: "Calories per Day",
        data: dailyTotals.map((e) => e.total),
        backgroundColor: "#f88415",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#f1f1f1" },
      },
      title: {
        display: true,
        text: "Daily Calorie Intake",
        color: "#f88415",
      },
    },
    scales: {
      x: {
        ticks: { color: "#f1f1f1" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#f1f1f1" },
      },
    },
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 p-4">
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Calorie History</h1>

      {dailyTotals.length === 0 ? (
        <p className="text-gray-400">No calorie data found.</p>
      ) : (
        <div className="bg-[#232828] p-4 rounded-md">
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}

export default CalorieHistoryPage;
