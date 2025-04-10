import React, { useEffect, useRef, useState } from "react";

function StepCounterScreen() {
  const [steps, setSteps] = useState(0);
  const [active, setActive] = useState(false);
  const [permission, setPermission] = useState(false);
  const [position, setPosition] = useState(null);
  const lastAccel = useRef({ x: 0, y: 0, z: 0 });
  const threshold = 12;

  const handleToggle = async () => {
    // Helyzet lekérése aktiváláskor
    if (!active && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        },

        (err) => {
          console.warn("Geolocation error:", err);
        }
      );
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
      <h1 className="text-[#f88415] text-xl font-bold mb-6">Step Tracker</h1>

      <div className="bg-[#232828] p-6 rounded-md text-center">
        <p className="text-5xl font-bold mb-2">{steps}</p>
        <p className="text-sm text-gray-400 mb-4">
          steps counted from device motion
        </p>

        {position && (
          <p className="text-xs text-gray-400 mb-4">
            Start Position: {position.lat.toFixed(5)}, {position.lon.toFixed(5)}
          </p>
        )}

        <button
          onClick={handleToggle}
          className="bg-[#f88415] text-[#141919] px-6 py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          {position && active ? "Stop Tracking" : "Start Tracking"}
        </button>
      </div>
    </div>
  );
}

export default StepCounterScreen;
