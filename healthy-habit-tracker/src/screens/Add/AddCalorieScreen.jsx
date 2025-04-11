import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vibration from "../../components/Vibration";
import dateConversation from "../../utils/dateConvertion";
import { addCalorieEntry } from "../../utils/trackingService";

function AddCalorieScreen() {
  const navigate = useNavigate();
  const { currentDate, currentTime } = dateConversation();
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime);
  const [kcal, setKcal] = useState("");

  const handleSave = () => {
    // if the calorie input is empty retrn
    if (!kcal || isNaN(kcal)) return;
    // add the calorie entry to the database
    addCalorieEntry(date, time, parseInt(kcal));
    // navigate back to calorie tracker
    navigate("/profile");
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
