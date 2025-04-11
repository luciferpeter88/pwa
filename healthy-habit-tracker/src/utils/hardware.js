export default function isHardwareEnabled(type) {
  const settings = JSON.parse(localStorage.getItem("hardwareSettings") || "{}");
  return settings[type] !== false; // treat undefined as enabled
}
