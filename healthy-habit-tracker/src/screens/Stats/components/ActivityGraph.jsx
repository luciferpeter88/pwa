import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import { getWeeklyHabitData } from "../../../utils/getWeeklyHabitData";
import { getDailyProgress } from "../../../utils/getDailyProgress";

Chart.register(annotationPlugin);

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function ActivityGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const [selectedHabit, setSelectedHabit] = useState("calories");
  const [goalValue, setGoalValue] = useState(0);
  const [habitGoals, setHabitGoals] = useState({
    calories: { label: "Calories", goal: 0, data: [], unit: "kcal" },
    water: { label: "Water", goal: 0, data: [], unit: "L" },
    steps: { label: "Steps", goal: 0, data: [], unit: "steps" },
  });

  // lekérjük a napi célt és heti adatokat, ha változik a selectedHabit
  useEffect(() => {
    async function fetchData() {
      const progress = await getDailyProgress(selectedHabit);
      const weeklyData = await getWeeklyHabitData(selectedHabit, selectedHabit);

      setGoalValue(progress.goal);
      setHabitGoals((prev) => ({
        ...prev,
        [selectedHabit]: {
          label: prev[selectedHabit].label,
          unit: prev[selectedHabit].unit,
          goal: progress.goal,
          data: weeklyData,
        },
      }));
    }
    fetchData();
  }, [selectedHabit]);

  //  csak egyszer hozza létre és update-eli az adatokat
  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");
    const config = {
      type: "line",
      data: {
        labels: WEEK_DAYS,
        datasets: [
          {
            label: `${habitGoals[selectedHabit].label} Progress`,
            data: habitGoals[selectedHabit].data,
            backgroundColor: "rgba(248, 132, 21, 0.2)",
            borderColor: "#f88415",
            borderWidth: 2,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: { ticks: { color: "#f1f1f1" }, grid: { color: "#2a2a2a" } },
          y: {
            beginAtZero: true,
            ticks: { color: "#f1f1f1" },
            grid: { color: "#2a2a2a" },
          },
        },
        plugins: {
          legend: { labels: { color: "#f1f1f1" } },
          annotation: {
            annotations: {
              goalLine: {
                type: "line",
                yMin: habitGoals[selectedHabit].goal,
                yMax: habitGoals[selectedHabit].goal,
                borderColor: "#888",
                borderWidth: 1.5,
                borderDash: [6, 6],
                label: {
                  content: `Goal: ${habitGoals[selectedHabit].goal} ${habitGoals[selectedHabit].unit}`,
                  enabled: true,
                  position: "end",
                  backgroundColor: "rgba(248,132,21,0.8)",
                  color: "#141919",
                  padding: 4,
                  font: { weight: "bold" },
                },
              },
            },
          },
        },
      },
    };

    // ha még nincs chart, létrehozzuk
    if (!chartInstance.current) {
      chartInstance.current = new Chart(ctx, config);
    } else {
      // különben csak az adatokat és a célszintet frissítjük
      chartInstance.current.data.datasets[0].data =
        habitGoals[selectedHabit].data;
      chartInstance.current.data.datasets[0].label = `${habitGoals[selectedHabit].label} Progress`;
      const anno =
        chartInstance.current.options.plugins.annotation.annotations.goalLine;
      anno.yMin = anno.yMax = habitGoals[selectedHabit].goal;
      anno.label.content = `Goal: ${habitGoals[selectedHabit].goal} ${habitGoals[selectedHabit].unit}`;
      chartInstance.current.update();
    }

    // tisztítás unmountkor
    return () => {
      chartInstance.current?.destroy();
      chartInstance.current = null;
    };
  }, [habitGoals, selectedHabit]);

  return (
    <div className="mt-10 rounded-md shadow-md text-gray-100 p-4 bg-[#141919]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#f88415] text-sm font-semibold">
          {habitGoals[selectedHabit].label} Progress (Goal: {goalValue})
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
