import React, { useState, useEffect } from "react";
import { db } from "../utils/db";

function CalorieTrackerPage() {
  const [calories, setCalories] = useState(0);
  const [logs, setLogs] = useState([]);
  const today = new Date().toISOString().split("T")[0];

  // Load today's calorie logs from IndexedDB
  useEffect(() => {
    async function loadLogs() {
      const all = await db.calories.where("date").equals(today).toArray();
      setLogs(all);
      setCalories(all.reduce((sum, item) => sum + item.calories, 0));
    }
    loadLogs();
  }, [today]);

  // Handle barcode scan / meal add simulation
  const handleScan = async () => {
    const scannedCalories = Math.floor(Math.random() * 150) + 50;
    const newEntry = {
      date: today,
      calories: scannedCalories,
      time: new Date().toLocaleTimeString(),
      image: "https://via.placeholder.com/100x100.png?text=Food",
    };

    await db.calories.add(newEntry);
    setLogs((prev) => [...prev, newEntry]);
    setCalories((prev) => prev + scannedCalories);
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 p-4">
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Calorie Intake</h1>

      <section className="bg-[#232828] p-4 rounded-md mb-6">
        <h2 className="text-[#f88415] text-lg font-semibold mb-2">
          Today's Calories
        </h2>
        <p className="text-lg mb-4">Total: {calories} kcal</p>
        <button
          onClick={handleScan}
          className="bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Scan Barcode / Add Meal
        </button>
      </section>

      <section className="bg-[#232828] p-4 rounded-md">
        <h2 className="text-[#f88415] text-lg font-semibold mb-4">Entries</h2>
        {logs.length === 0 ? (
          <p className="text-gray-400">No entries yet today.</p>
        ) : (
          <ul className="space-y-4">
            {logs.map((entry) => (
              <li key={entry.id} className="flex items-center space-x-4">
                <img
                  src={entry.image}
                  alt="Food"
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div>
                  <p className="text-md">{entry.calories} kcal</p>
                  <p className="text-sm text-gray-400">{entry.time}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default CalorieTrackerPage;
