import React, { useEffect, useState } from "react";
import { db } from "../utils/db";

function StepGoalPage() {
  const [goal, setGoal] = useState(8000);
  const [input, setInput] = useState("8000");

  useEffect(() => {
    async function fetchGoal() {
      const setting = await db.settings.get("stepGoal");
      if (setting) {
        setGoal(setting.value);
        setInput(String(setting.value));
      }
    }
    fetchGoal();
  }, []);

  const handleSave = async () => {
    const value = parseInt(input);
    if (!isNaN(value) && value > 0) {
      await db.settings.put({ key: "stepGoal", value });
      setGoal(value);
    }
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 p-4">
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Step Goal</h1>

      <section className="bg-[#232828] p-4 rounded-md">
        <h2 className="text-[#f88415] text-lg font-semibold mb-2">
          Your current daily goal:
        </h2>
        <p className="text-lg mb-4">{goal} steps</p>

        <input
          type="number"
          className="bg-[#141919] text-white border border-gray-600 p-2 rounded-md w-full mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Save Goal
        </button>
      </section>
    </div>
  );
}

export default StepGoalPage;
