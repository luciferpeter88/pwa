import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import Vibration from "../../components/Vibration";
import UpdatePosition from "./components/UpdatePosition";
import useGeolocation from "../../hooks/useGeolocation";
import useDeviceMotion from "../../hooks/useDeviceMotion";
import useDeviceOrientation from "../../hooks/useDeviceOrientation";

function StepCountScreen() {
  const navigate = useNavigate();
  const position = useGeolocation();
  const steps = useDeviceMotion();
  const heading = useDeviceOrientation();

  return (
    <div className="bg-[#141919] min-h-screen text-white p-4">
      <div className="flex items-center justify-between mb-6 mt-5">
        <Vibration onClick={() => navigate(-1)} className="text-xl">
          ←
        </Vibration>
        <h2 className="text-md font-semibold">Step Tracker</h2>
      </div>

      <p className="mb-2">
        Steps: <span className="font-bold">{steps}</span>
      </p>
      {position && (
        <p className="mb-4 text-sm text-gray-400">
          Lat: {position?.lat.toFixed(5)}, Lon: {position?.lon.toFixed(5)}{" "}
          <br />
          Heading: {heading?.toFixed(2)}°
        </p>
      )}

      <div className="h-[60vh] rounded-md overflow-hidden border border-[#333]">
        {position && (
          <MapContainer
            center={[position.lat, position.lon]}
            zoom={17}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            />
            <UpdatePosition position={position} heading={heading} />
          </MapContainer>
        )}
      </div>
    </div>
  );
}

export default StepCountScreen;
