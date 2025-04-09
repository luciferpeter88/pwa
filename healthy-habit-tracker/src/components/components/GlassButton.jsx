import React from "react";

function GlassButton({
  icon,
  label,
  onClick,
  color = "bg-white/10",
  textColor = "text-white",
  position,
}) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-16 h-20 rounded-xl ${color} ${textColor} ${position}
        backdrop-blur-md shadow-lg border border-white/20 
        transition hover:scale-105 active:scale-95`}
    >
      <div className="w-10 h-10 mb-1 bg-white/10 rounded-full flex items-center justify-center">
        <span className="text-xs font-medium">
          <img src={icon} alt={label} className="w-6 h-6 mb-1" />
        </span>
      </div>
    </button>
  );
}

export default GlassButton;
