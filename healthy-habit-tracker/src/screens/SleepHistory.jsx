import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

function SleepHistoryPage() {
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    async function fetchSleepData() {
      const data = await db.sleep.toArray();
      const sorted = data.sort((a, b) => b.date.localeCompare(a.date));
      setSleepData(sorted);
    }
    fetchSleepData();
  }, []);

  const chartData = {
    labels: sleepData.map((entry) => entry.date),
    datasets: [
      {
        label: "Sleep Duration (min)",
        data: sleepData.map((entry) => entry.durationMinutes),
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
        text: "Sleep Duration by Date",
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
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">Sleep History</h1>
        <Link to="/sleep-tracking" className="text-sm text-[#f88415]">
          Back
        </Link>
      </header>
      {sleepData.length === 0 ? (
        <p className="text-gray-400">No sleep data found.</p>
      ) : (
        <>
          <div className="bg-[#232828] p-4 rounded-md mb-6 m-4">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto mx-4">
            {sleepData.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#232828] p-4 rounded-md shadow"
              >
                <h2 className="text-[#f88415] text-md font-semibold mb-2">
                  {entry.date}
                </h2>
                <p>Duration: {entry.durationMinutes} min</p>
                <p>Disturbances: {entry.disturbanceCount}</p>
                <p>Avg. Volume: {entry.averageVolume}</p>
                <p>
                  Start: {entry.start} – End: {entry.end}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default SleepHistoryPage;
