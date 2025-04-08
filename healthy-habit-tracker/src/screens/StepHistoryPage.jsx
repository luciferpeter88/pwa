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

function StepHistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    async function fetchSteps() {
      const data = await db.steps.toArray();
      const sorted = data.sort((a, b) => b.date.localeCompare(a.date));
      setHistory(sorted);
    }
    fetchSteps();
  }, []);

  const chartData = {
    labels: history.map((entry) => entry.date),
    datasets: [
      {
        label: "Steps per Day",
        data: history.map((entry) => entry.steps),
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
        text: "Daily Step Count",
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
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Step History</h1>

      {history.length === 0 ? (
        <p className="text-gray-400">No step data found.</p>
      ) : (
        <div className="bg-[#232828] p-4 rounded-md">
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}

export default StepHistoryPage;
