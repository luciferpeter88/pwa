import React, { useEffect, useState } from "react";
import { db } from "../utils/db";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function History() {
  const [grouped, setGrouped] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHabits() {
      const all = await db.habits.toArray();
      const byDate = {};
      for (const habit of all) {
        if (!byDate[habit.date]) byDate[habit.date] = [];
        byDate[habit.date].push(habit);
      }
      setGrouped(byDate);
      setLoading(false);
    }
    fetchHabits();
  }, []);

  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="p-4 text-gray-100 bg-[#141919] min-h-screen">
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Habit History</h1>
      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : sortedDates.length === 0 ? (
        <p className="text-gray-400">No habit history found.</p>
      ) : (
        sortedDates.map((date) => {
          const habits = grouped[date];
          const completed = habits.filter((h) => h.completed).length;
          const total = habits.length;
          const incomplete = total - completed;

          const chartData = {
            labels: ["Completed", "Incomplete"],
            datasets: [
              {
                data: [completed, incomplete],
                backgroundColor: ["#f88415", "#444"],
                borderWidth: 1,
              },
            ],
          };

          return (
            <div
              key={date}
              className="mb-8 bg-[#232828] p-4 rounded-md shadow-md"
            >
              <h2 className="text-[#f88415] text-md font-semibold mb-2">
                {date} — {completed}/{total} completed
              </h2>
              <div className="w-40 mx-auto mb-4">
                <Pie data={chartData} />
              </div>
              <ul className="space-y-1">
                {habits.map((habit) => (
                  <li key={habit.id} className="flex items-center">
                    <span
                      className={
                        habit.completed
                          ? "line-through text-green-400"
                          : "text-red-400"
                      }
                    >
                      {habit.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      )}
    </div>
  );
}

export default History;
