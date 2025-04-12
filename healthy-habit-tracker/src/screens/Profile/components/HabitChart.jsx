import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import { getWeeklyHabitData } from "../../../utils/getWeeklyHabitData";
import { getDailyProgress } from "../../../utils/getDailyProgress";

Chart.register(annotationPlugin);

function HabitChart({ habit, dummyData }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [goalData, setGoalData] = useState(null);

  const [habitGoals, setHabitGoals] = useState({
    [habit]: dummyData,
  });

  useEffect(() => {
    async function fetchData() {
      const progress = await getDailyProgress(habit);

      const weeklyData = await getWeeklyHabitData(habit, habit);

      setGoalData(progress.goal);

      setHabitGoals({
        [habit]: {
          ...dummyData,
          goal: progress.goal,
          data: weeklyData,
        },
      });
    }
    fetchData();
  }, [habit, dummyData]);

  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const updatedHabit = habitGoals[habit];

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: `${updatedHabit.label} Progress`,
            data: updatedHabit.data,
            backgroundColor: "rgba(248, 132, 21, 0.2)",
            borderColor: "#f88415",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: "#f1f1f1" },
          },
          annotation: {
            annotations: {
              goalLine: {
                type: "line",
                yMin: updatedHabit.goal,
                yMax: updatedHabit.goal,
                borderColor: "#888",
                borderWidth: 1.5,
                borderDash: [6, 6],
                label: {
                  content: `Goal: ${updatedHabit.goal} ${updatedHabit.unit}`,
                  enabled: true,
                  position: "end",
                  backgroundColor: "rgba(248, 132, 21, 0.8)",
                  color: "#141919",
                  padding: 4,
                  font: { weight: "bold" },
                },
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { color: "#f1f1f1" },
            grid: { color: "#2a2a2a" },
          },
          x: {
            ticks: { color: "#f1f1f1" },
            grid: { color: "#2a2a2a" },
          },
        },
      },
    });
  }, [habitGoals, habit]);

  return (
    <div className="mt-10 rounded-md shadow-md text-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#f88415] text-sm font-semibold">
          {habitGoals[habit].label} Progress (Goal: {goalData})
        </h2>
      </div>
      <canvas ref={chartRef} className="w-full h-64" />
    </div>
  );
}

export default HabitChart;
