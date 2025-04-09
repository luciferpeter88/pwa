import React, { useEffect, useRef, useState } from "react";

function StepCounterScreen() {
  const [steps, setSteps] = useState(0);
  const [active, setActive] = useState(false);
  const lastAccel = useRef({ x: 0, y: 0, z: 0 });
  const threshold = 12;

  const handleToggle = async () => {
    if (
      !active &&
      typeof DeviceMotionEvent !== "undefined" &&
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      try {
        const permission = await DeviceMotionEvent.requestPermission();
        if (permission !== "granted") {
          alert("Permission for motion access was denied.");
          return;
        }
      } catch (err) {
        console.error("Motion permission error:", err);
        return;
      }
    }

    setActive((prev) => !prev);
  };

  useEffect(() => {
    let listener;

    if (active) {
      listener = (event) => {
        const acc = event.accelerationIncludingGravity;
        if (!acc) return;

        const { x, y, z } = acc;
        const delta =
          Math.abs(x - lastAccel.current.x) +
          Math.abs(y - lastAccel.current.y) +
          Math.abs(z - lastAccel.current.z);

        if (delta > threshold) {
          setSteps((prev) => prev + 1);
        }

        lastAccel.current = { x, y, z };
      };

      window.addEventListener("devicemotion", listener);
    }

    return () => {
      if (listener) window.removeEventListener("devicemotion", listener);
    };
  }, [active]);

  return (
    <div className="bg-[#141919] min-h-screen text-gray-100 p-4">
      <h1 className="text-[#f88415] text-xl font-bold mb-6">
        Step Tracker (Fallback)
      </h1>

      <div className="bg-[#232828] p-6 rounded-md text-center">
        <p className="text-5xl font-bold mb-2">{steps}</p>
        <p className="text-sm text-gray-400 mb-4">
          steps counted from device motion
        </p>
        <button
          onClick={handleToggle}
          className="bg-[#f88415] text-[#141919] px-6 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          {active ? "Stop Counting" : "Start Counting"}
        </button>
      </div>
    </div>
  );
}

export default StepCounterScreen;
