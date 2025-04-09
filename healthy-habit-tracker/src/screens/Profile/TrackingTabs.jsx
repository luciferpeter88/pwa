import React from "react";
import { Link, useLocation } from "react-router-dom";

const TrackingTabs = () => {
  const tabs = [
    {
      header: "Kcal",
      route: "/profile",
    },
    {
      header: "Water",
      route: "/profile/water",
    },
    {
      header: "Steps",
      route: "/profile/steps",
    },
  ];
  const { pathname } = useLocation();
  return (
    <nav className="flex  mt-5 bg-[#232828] rounded-full">
      {tabs.map((tab) => (
        <Link to={tab.route} className="flex-1" key={tab.header}>
          <button
            key={tab.header}
            className={`flex-1 px-7 py-3 text-xs text-center text-white cursor-pointer rounded-full ${
              pathname === tab.route
                ? "bg-[#f88415] text-white"
                : "bg-[#232828] text-[#f1f1f1]"
            }`}
            aria-label={`Switch to ${tab} tracking`}
          >
            {tab.header}
          </button>
        </Link>
      ))}
    </nav>
  );
};

export default TrackingTabs;
