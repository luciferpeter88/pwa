import React from "react";
import StatsCard from "./components/StatsCard";
import MetricsGrid from "./components/MetricsGrid";
import ActivityGraph from "./components/ActivityGraph";
import BottomNavigation from "../../components/BottomNavigation";

function DashboardStats() {
  return (
    <React.Fragment>
      <article className="flex flex-col items-center h-screen w-full text-white bg-gradient-to-br from-[#141919] via-[#1c1f1f] to-[#101111] relative">
        <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-[#00ffcc]/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <section className="w-full px-4 z-10">
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
