import React from "react";

function Widget({ strokeDashoffset, precent, text }) {
  return (
    <div className="flex items-center space-x-4 mt-2">
      <div className="relative w-16 h-16">
        <svg className="absolute top-0 left-0" width="64" height="64">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#444"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#f88415"
            strokeWidth="6"
            fill="none"
            strokeDasharray={176}
            strokeDashoffset={strokeDashoffset} // 40%
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs">
          {precent}
        </div>
      </div>
      <div className="text-sm text-gray-300">{text}</div>
    </div>
  );
}

export default Widget;
