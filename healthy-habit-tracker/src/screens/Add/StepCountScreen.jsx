import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import Vibration from "../../components/Vibration";
import UpdatePosition from "./components/UpdatePosition";
import useGeolocation from "../../hooks/useGeolocation";
import useDeviceMotion from "../../hooks/useDeviceMotion";
import useDeviceOrientation from "../../hooks/useDeviceOrientation";
import dateConversation from "../../utils/dateConvertion";
import { addStepEntry } from "../../utils/trackingService";
import { deleteTodaysData } from "../../utils/deleteTodayData";

function StepCountScreen() {
  const { currentDate } = dateConversation();
  const navigate = useNavigate();
  const position = useGeolocation();
  // useDeviceMotion to get the step count
  const steps = useDeviceMotion();
  const heading = useDeviceOrientation();
  const handleSave = () => {
    if (isNaN(steps)) return;
    console.log(steps);
    // add the step entry to the database
    // addStepEntry(currentDate(), currentTime(), parseInt(steps));
    addStepEntry(currentDate(), parseInt(steps));
    navigate("/profile/steps");
  };
  return (
    <div className="bg-gradient-to-br from-[#141919] via-[#1c1f1f] to-[#101111] relative min-h-screen text-white p-4 flex flex-col">
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="flex items-center justify-between mb-6 mt-5">
        <Vibration onClick={() => navigate(-1)} className="text-xl">
          ←
        </Vibration>
        <h2 className="text-md font-semibold">Step Tracker</h2>
        <Vibration
          className="text-sm text-[#f88415] font-medium bg-[#232828] px-4 py-2 rounded-md"
          onClick={handleSave}
        >
          Save
        </Vibration>
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
      <button
        className="mt-6 bg-[#f88415] text-bwhite px-6 py-2 rounded-md font-medium hover:opacity-90 z-10"
        onClick={() => deleteTodaysData("steps")}
      >
        Delete Today's Data
      </button>
    </div>
  );
}

export default StepCountScreen;
