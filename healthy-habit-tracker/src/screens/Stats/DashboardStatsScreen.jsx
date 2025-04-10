import React from "react";
import StatsCard from "./components/StatsCard";
import MetricsGrid from "./components/MetricsGrid";
import ActivityGraph from "./components/ActivityGraph";
import BottomNavigation from "../../components/BottomNavigation";

function DashboardStats() {
  return (
    <React.Fragment>
      <article className="flex flex-col items-center h-screen w-full text-white bg-[#141919]">
        <section className="w-full px-4">
          <header className="mt-7.5 text-[5vw] text-center">Static</header>
          <StatsCard />
          <MetricsGrid />
          <ActivityGraph />
        </section>
        <BottomNavigation />
      </article>
    </React.Fragment>
  );
}

export default DashboardStats;
