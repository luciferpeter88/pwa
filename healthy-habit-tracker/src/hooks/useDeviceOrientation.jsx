import { useEffect, useState } from "react";

function useDeviceOrientation() {
  const [heading, setHeading] = useState(0);

  useEffect(() => {
    const orientationHandler = (event) => {
      setHeading(event.alpha); // 0–360 fok (0 = észak)
    };

    window.addEventListener("deviceorientation", orientationHandler);
    return () =>
      window.removeEventListener("deviceorientation", orientationHandler);
  }, []);
  return heading;
}

export default useDeviceOrientation;
