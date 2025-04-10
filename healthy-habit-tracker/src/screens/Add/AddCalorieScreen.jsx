import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vibration from "../../components/Vibration";

function AddCalorieScreen() {
  const navigate = useNavigate();
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0]
  );
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
  const [kcal, setKcal] = useState("");

  const handleSave = () => {
    if (!kcal || isNaN(kcal)) return;
    // Save to DB here (e.g., db.calories.add(...))
    navigate(-1);
  };

  return (
    <div className="bg-[#141919] min-h-screen text-white p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 mt-5">
        <Vibration onClick={() => navigate(-1)} className="text-xl">
          ←
        </Vibration>

        <h2 className="text-md font-semibold">Add Kcal</h2>
        <Vibration
          className="text-sm text-[#f88415] font-medium"
          onClick={handleSave}
        >
          Save
        </Vibration>
      </div>

      <div className="space-y-6">
        {/* Date Input */}
        <div>
          <label className="text-sm text-gray-400">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none"
          />
        </div>

        {/* Time Input */}
        <div>
          <label className="text-sm text-gray-400">Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none"
          />
        </div>

        {/* Kcal Input */}
        <div>
          <label className="text-sm text-gray-400">Add kcal:</label>
          <input
            type="number"
            value={kcal}
            onChange={(e) => setKcal(e.target.value)}
            inputMode="numeric"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none"
            placeholder="Enter kcal value"
          />
        </div>
      </div>
    </div>
  );
}

export default AddCalorieScreen;
