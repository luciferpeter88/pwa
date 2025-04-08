import React, { useEffect, useState } from "react";
import { db } from "../utils/db";

function StepTrackerPage() {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(8000);
  const today = new Date().toISOString().split("T")[0];

  // Load today's steps
  useEffect(() => {
    async function loadSteps() {
      const entry = await db.steps.where("date").equals(today).first();
      if (entry) setSteps(entry.steps);
    }
    loadSteps();
  }, [today]);

  const handleAddSteps = async () => {
    const added = Math.floor(Math.random() * 200 + 100);
    const newSteps = steps + added;
    setSteps(newSteps);

    const existing = await db.steps.where("date").equals(today).first();
    if (existing) {
      await db.steps.update(existing.id, { steps: newSteps });
    } else {
      await db.steps.add({
        date: today,
        steps: newSteps,
      });
    }
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 p-4">
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Step Tracker</h1>

      <section className="bg-[#232828] p-4 rounded-md mb-6">
        <h2 className="text-[#f88415] text-lg font-semibold mb-2">
          Today's Steps
        </h2>
        <p className="text-lg mb-2">
          {steps} / {goal} steps
        </p>
        <button
          onClick={handleAddSteps}
          className="bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Simulate Steps
        </button>
      </section>
    </div>
  );
}

export default StepTrackerPage;
