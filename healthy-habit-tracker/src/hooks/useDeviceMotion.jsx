import { useEffect, useRef, useState } from "react";

export default function useDeviceMotion() {
  const [steps, setSteps] = useState(0);

  const lastAccel = useRef({ x: 0, y: 0, z: 0 });
  const threshold = 12;
  useEffect(() => {
    const handleMotion = (event) => {
      const acc = event.accelerationIncludingGravity;
      if (!acc) return;
      const { x, y, z } = acc;
      const delta =
        Math.abs(x - lastAccel.current.x) +
        Math.abs(y - lastAccel.current.y) +
        Math.abs(z - lastAccel.current.z);

      if (delta > threshold) {
        setSteps((prev) => {
          const newSteps = prev + 1;

          if (newSteps === 50) {
            const msg = new SpeechSynthesisUtterance("50 steps completed!");
            window.speechSynthesis.speak(msg);
            if ("vibrate" in navigator) {
              navigator.vibrate(300);
            }
          }

          return newSteps;
        });
      }

      lastAccel.current = { x, y, z };
    };

    window.addEventListener("devicemotion", handleMotion);
    return () => window.removeEventListener("devicemotion", handleMotion);
  }, []);
  return steps;
}
