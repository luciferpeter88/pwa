import React from "react";

function MetricItem({ value, label }) {
  return (
    <div className="flex flex-col gap-1 items-center">
      <h2 className="text-[6.5vw] font-bold">{value}</h2>
      <p className="text-[3vw] text-[#f88415]">{label}</p>
    </div>
  );
}

function MetricsGrid() {
  return (
    <section className="flex justify-between items-start px-4 mt-8">
      <MetricItem value="3,256 m" label="Distance" />
      <MetricItem value="4,753" label="Steps" />
      <MetricItem value="6 Glass" label="Drink Water" />
    </section>
  );
}

export default MetricsGrid;
