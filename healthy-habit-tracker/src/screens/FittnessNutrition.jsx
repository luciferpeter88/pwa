import React, { useState, useEffect } from "react";

function FitnessNutrition() {
  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [maintenanceCalories, setMaintenanceCalories] = useState(2000); // Sample value

  // Simulate step count update (replace with actual pedometer API logic)
  useEffect(() => {
    const interval = setInterval(() => {
      //   setSteps((prev) => prev + Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate barcode scanning to add calories (replace with actual barcode scanning logic)
  const handleScanBarcode = () => {
    const scannedCalories = Math.floor(Math.random() * 100) + 50;
    setCalories((prev) => prev + scannedCalories);
  };

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 flex flex-col">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-[#232828] shadow-md">
        <h1 className="text-[#f88415] text-2xl font-bold">
          Fitness & Nutrition
        </h1>
      </header>

      {/* Main Content */}
      <main className="p-4 flex-1 overflow-y-auto">
        <div className="space-y-6">
          {/* Step Count Card */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">Step Count</h2>
            <p className="text-lg mt-2">{steps} steps</p>
          </section>

          {/* Calorie Tracker Card */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              Calorie Tracker
            </h2>
            <p className="text-lg mt-2">Total Calories: {calories}</p>
            <button
              onClick={handleScanBarcode}
              className="mt-4 bg-[#f88415] text-[#141919] px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Scan Barcode
            </button>
          </section>

          {/* Maintenance Calories Card */}
          <section className="bg-[#232828] rounded-md p-4 shadow-md">
            <h2 className="text-[#f88415] text-xl font-semibold">
              Maintenance Calories
            </h2>
            <p className="text-lg mt-2">{maintenanceCalories} kcal</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FitnessNutrition;
