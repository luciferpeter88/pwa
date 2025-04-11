import L from "leaflet";
import { Marker, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

function UpdatePosition({ position, heading }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView([position.lat, position.lon], 17);
    }
  }, [position]);

  return position ? (
    <Marker
      position={[position.lat, position.lon]}
      icon={icon}
      rotationAngle={heading}
      rotationOrigin="center"
    />
  ) : null;
}
export default UpdatePosition;
