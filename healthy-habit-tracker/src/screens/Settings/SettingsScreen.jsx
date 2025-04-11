import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Vibration from "../../components/Vibration";

const defaultSettings = {
  geolocation: true,
  microphone: true,
  vibration: true,
  devicemotion: true,
  deviceorientation: true,
};

function SettingsScreen() {
  const [settings, setSettings] = useState(defaultSettings);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("hardwareSettings");
    if (stored) {
      setSettings(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hardwareSettings", JSON.stringify(settings));
  }, [settings]);

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-[#141919] min-h-screen text-white p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 mt-5">
        <Vibration onClick={() => navigate(-1)} className="text-xl">
          ←
        </Vibration>

        <h2 className="text-md font-semibold">Hardware API Settings</h2>
      </div>

      {Object.entries(settings).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between mb-4 mt-2">
          <span className="capitalize">{key}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={() => handleToggle(key)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#f88415] transition-all"></div>
            <span className="ml-3 text-sm">
              {value ? "Enabled" : "Disabled"}
            </span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default SettingsScreen;
