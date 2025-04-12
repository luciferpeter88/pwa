import React, { useEffect, useState } from "react";
import { getLoggedInUser } from "../utils/auth";
import { getDailyGoal, setDailyGoal } from "../utils/goalService";

const typeLabels = {
  calorie: "Calorie Goal (kcal)",
  water: "Water Goal (ml)",
  step: "Step Goal",
};

function GoalEditModal({ show, type, onClose, setRender }) {
  // based on the tyoe, set the value
  // calorie, water, step
  const [value, setValue] = useState("");
  const { userID } = getLoggedInUser();

  useEffect(() => {
    // if the type is calorie, water, step, set the value
    if (show && userID && type) {
      // get the daily goal from the database using helper function based on userID
      getDailyGoal(userID).then((goal) => {
        if (goal) {
          if (type === "calorie") setValue(goal.calorieGoal || "");
          if (type === "water") setValue(goal.waterGoal || "");
          if (type === "step") setValue(goal.stepGoal || "");
        }
      });
    }
  }, [show, type, userID]);

  const handleSave = async () => {
    const current = await getDailyGoal(userID);
    const updatedGoal = {
      calorieGoal: current?.calorieGoal || 0,
      waterGoal: current?.waterGoal || 0,
      stepGoal: current?.stepGoal || 0,
    };

    if (type === "calorie") updatedGoal.calorieGoal = parseInt(value);
    if (type === "water") updatedGoal.waterGoal = parseInt(value);
    if (type === "step") updatedGoal.stepGoal = parseInt(value);

    await setDailyGoal(userID, new Date(), updatedGoal);
    setRender((prev) => !prev);
    onClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#232828]/60 backdrop-blur-sm">
      <div className="bg-[#1c1c1c]/40 rounded-xl p-6 w-80 text-white shadow-xl space-y-4">
        <h2 className="text-lg font-semibold text-center">
          Set {typeLabels[type]}
        </h2>

        <input
          type="number"
          className="w-full bg-[#2a2a2a]/30 border-[#333] rounded-md text-white focus:outline-none focus:border-[#f88415] focus:ring-1 focus:ring-[#f88415] p-3 rounded-md border border-[#333] text-white text-center"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={handleSave}
          className="w-full mt-4 bg-[#f88415] text-black py-2 rounded-md font-semibold"
        >
          Save Goal
        </button>
        <button onClick={onClose} className="w-full text-sm text-gray-400 mt-1">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default GoalEditModal;
