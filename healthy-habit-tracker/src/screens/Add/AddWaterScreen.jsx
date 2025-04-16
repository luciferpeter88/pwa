import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Vibration from "../../components/Vibration";
import dateConversation from "../../utils/dateConvertion";
import { addWaterEntry } from "../../utils/trackingService";
import { deleteTodaysData } from "../../utils/deleteTodayData";
function AddWaterScreen() {
  const navigate = useNavigate();
  const { currentDate, currentTime } = dateConversation();
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime);
  const [water, setWater] = useState("");

  const handleSave = () => {
    if (!water || isNaN(water)) return;
    // addWaterEntry(date, time, parseInt(water));
    addWaterEntry(date, parseInt(water));
    navigate("/profile/water");
  };

  return (
    <div className="bg-gradient-to-br from-[#141919] via-[#1c1f1f] to-[#101111] relative min-h-screen text-white p-4 flex flex-col">
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="flex items-center justify-between mb-6 mt-5">
        <Vibration onClick={() => navigate(-1)} className="text-xl">
          ←
        </Vibration>

        <h2 className="text-md font-semibold">Add Water</h2>
        <Vibration
          className="text-sm text-[#f88415] font-medium bg-[#232828] px-4 py-2 rounded-md"
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

        {/* Glasses Input */}
        <div>
          <label className="text-sm text-gray-400">Add Water:</label>
          <input
            type="number"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            inputMode="numeric"
            className="w-full bg-transparent border-b border-gray-600 text-white py-2 focus:outline-none"
            placeholder="Enter number of glasses"
          />
        </div>
      </div>
      <button
        className="mt-6 bg-[#f88415] text-white px-6 py-2 rounded-md font-medium hover:opacity-90 z-10 "
        onClick={() => deleteTodaysData("water")}
      >
        Delete Today's Data
      </button>
    </div>
  );
}

export default AddWaterScreen;
