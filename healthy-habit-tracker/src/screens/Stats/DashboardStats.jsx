import React from "react";
import StatsCard from "./StatsCard";
import MetricsGrid from "./MetricsGrid";
import ActivityGraph from "./ActivityGraph";
import BottomNavigation from "../DashboardMain/BottomNavigation";

function DashboardStats() {
  return (
    <React.Fragment>
      <article className="flex flex-col items-center h-screen w-full text-white bg-[#141919]">
        <section className="w-full px-4">
          <header className="mt-20 text-[5vw] text-center">Static</header>
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
