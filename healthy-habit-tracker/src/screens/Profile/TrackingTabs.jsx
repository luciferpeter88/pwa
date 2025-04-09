import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <nav className="flex p-1.5 mt-5 bg-[#232828] rounded-full">
      {tabs.map((tab) => (
        <Link to={tab.route} className="flex-1" key={tab.header}>
          <button
            key={tab.header}
            className="flex-1 px-7 py-3 text-xs text-center text-white cursor-pointer rounded-full"
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
