import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ title, to, buttonText, children }) => {
  return (
    <section className="bg-[#232828] rounded-md p-4 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[#f88415] text-md font-semibold">{title}</h2>
        {to && buttonText && (
          <Link to={to}>
            <button className="bg-[#f88415] text-[#141919] px-3 py-1 rounded-md text-sm font-medium hover:opacity-90 transition">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};

export default DashboardCard;
