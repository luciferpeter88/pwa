import { useEffect, useState } from "react";
export default function useGeolocation() {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          });
        },
        (err) => console.error("Geolocation error:", err),
        { enableHighAccuracy: true, maximumAge: 1000 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  return position;
}
