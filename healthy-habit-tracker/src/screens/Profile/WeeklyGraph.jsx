import React, { useEffect, useState } from "react";
import { db } from "../../utils/db";
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

function CalorieBurnedPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const all = await db.calories.toArray();
      const grouped = {};
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
  console.log(data);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Kcal Burned",
        data: data.map((entry) => entry.calories),
        backgroundColor: "#f88415",
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "This Week Details",
        color: "#f1f1f1",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#f1f1f1",
        },
        grid: {
          color: "#2a2a2a",
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 5000,
        ticks: {
          stepSize: 1000,
          callback: function (value) {
            return value.toLocaleString();
          },
          color: "#f1f1f1",
        },
        grid: {
          color: "#2a2a2a",
        },
      },
    },
  };

  return (
    <div className="text-gray-100">
      <h1 className="text-[#f88415] text-[4vw] font-bold mb-6">
        Calorie Burned
      </h1>
      <div className="rounded-md">
        {data.length === 0 ? (
          <p className="text-gray-400">No data found for this week.</p>
        ) : (
          <Bar data={chartData} options={chartOptions} />
        )}
      </div>
    </div>
  );
}

export default CalorieBurnedPage;
