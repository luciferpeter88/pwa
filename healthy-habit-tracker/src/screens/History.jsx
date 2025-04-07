import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Link } from "react-router-dom";
import fetchHabitsFromDB from "../utils/fetchAllHabit";

ChartJS.register(ArcElement, Tooltip, Legend);

function History() {
  const [grouped, setGrouped] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHabits() {
      // fetch all habits from the databas
      const byDate = await fetchHabitsFromDB();
      // update the sates with the grouped habits
      setGrouped(byDate);
      setLoading(false);
    }
    fetchHabits();
  }, []);

  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-lg font-bold">Habbit History</h1>
        <Link to="/daily-habit" className="text-[#f88415] text-sm">
          Back
        </Link>
      </header>
      <div className="p-4">
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
    </div>
  );
}

export default History;
