import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";

Chart.register(annotationPlugin);

const habitGoals = {
  steps: {
    label: "Steps",
    goal: 3000,
    data: [3500, 2200, 2900, 3000, 4100, 3700, 2800],
    unit: "steps",
  },
  calories: {
    label: "Calories",
    goal: 1800,
    data: [1500, 2000, 1750, 2800, 1600, 1900, 1700],
    unit: "kcal",
  },
  sleep: {
    label: "Drink Water",
    goal: 2,
    data: [2.5, 1.8, 2.2, 3, 2.5, 2.7, 1.9],
    unit: "L",
  },
};

function ActivityGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [selectedHabit, setSelectedHabit] = useState("steps");

  const currentHabit = habitGoals[selectedHabit];

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: `${currentHabit.label} Progress`,
            data: currentHabit.data,
            backgroundColor: "rgba(248, 132, 21, 0.2)",
            borderColor: "#f88415",
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "#f1f1f1",
            },
          },
          annotation: {
            annotations: {
              goalLine: {
                type: "line",
                yMin: currentHabit.goal,
                yMax: currentHabit.goal,
                borderColor: "#888",
                borderWidth: 1.5,
                borderDash: [6, 6],
                label: {
                  content: `Goal: ${currentHabit.goal} ${currentHabit.unit}`,
                  enabled: true,
                  position: "end",
                  backgroundColor: "rgba(248, 132, 21, 0.8)",
                  color: "#141919",
                  padding: 4,
                  font: {
                    weight: "bold",
                  },
                },
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#f1f1f1",
            },
            grid: {
              color: "#2a2a2a",
            },
          },
          x: {
            ticks: {
              color: "#f1f1f1",
            },
            grid: {
              color: "#2a2a2a",
            },
          },
        },
      },
    });
  }, [selectedHabit]);

  return (
    <div className=" mt-10 rounded-md shadow-md text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#f88415] text-sm font-semibold">
          {habitGoals[selectedHabit].label} Progress (Goal:{" "}
          {habitGoals[selectedHabit].goal} {habitGoals[selectedHabit].unit})
        </h2>
        <select
          value={selectedHabit}
          onChange={(e) => setSelectedHabit(e.target.value)}
          className="bg-[#141919] text-gray-100 border border-[#444] rounded-md px-2 py-1 text-sm"
        >
          {Object.keys(habitGoals).map((key) => (
            <option key={key} value={key}>
              {habitGoals[key].label}
            </option>
          ))}
        </select>
      </div>
      <canvas ref={chartRef} className="w-full h-64" />
    </div>
  );
}

export default ActivityGraph;
