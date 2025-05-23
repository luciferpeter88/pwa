import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import { getWeeklyHabitData } from "../../../utils/getWeeklyHabitData";
import { getDailyProgress } from "../../../utils/getDailyProgress";

Chart.register(annotationPlugin);

function ActivityGraph() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  // A szokás mostantól fixen "calories"
  const selectedHabit = "calories";

  const [goalData, setGoalData] = useState(null);
  // Csak a calories dummy adatok maradnak, mert csak erre dolgozunk
  const [habitGoals, setHabitGoals] = useState({
    calories: {
      label: "Calories",
      goal: 1800,
      data: [1500, 2000, 1750, 2800, 1600, 1900, 1700],
      unit: "kcal",
    },
  });

  // Fetcheljük a napi és heti kalória adatokat egyszer, mivel nincs váltás
  useEffect(() => {
    async function fetchData() {
      // Lekérjük a napi progress adatot (például: { current, goal, percent }).
      const progress = await getDailyProgress(selectedHabit);
      // Lekérjük a heti adatokat (feltételezve, hogy egy 7 elemes tömböt ad vissza)
      const weeklyData = await getWeeklyHabitData(selectedHabit, selectedHabit);

      // A headerben megjelenítendő célérték frissítése
      setGoalData(progress.goal);

      // Csak a calories objektumot frissítjük az új adatokkal
      setHabitGoals({
        [selectedHabit]: {
          ...habitGoals[selectedHabit],
          goal: progress.goal,
          data: weeklyData,
        },
      });
    }
    fetchData();
    // Üres dependency array, mert a selectedHabit nem változik
  }, []);

  // Létrehozzuk vagy frissítjük a diagramot, amikor a habitGoals frissül
  useEffect(() => {
    if (!chartRef.current) return;
    const ctx = chartRef.current.getContext("2d");

    // Ha már létezik előző diagram, elpusztítjuk
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const updatedHabit = habitGoals[selectedHabit];

    chartInstance.current = new Chart(ctx, {
      type: "bar", // Itt a sávdiagram típust használjuk
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
  }, [habitGoals, selectedHabit]);

  return (
    <div className="mt-10 rounded-md shadow-md text-gray-100">
      {/* A dropdown eltávolítva, mivel nincs váltás */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#f88415] text-sm font-semibold">
          {habitGoals[selectedHabit].label} Progress (Goal: {goalData})
        </h2>
      </div>
      <canvas ref={chartRef} className="w-full h-64" />
    </div>
  );
}

export default ActivityGraph;
