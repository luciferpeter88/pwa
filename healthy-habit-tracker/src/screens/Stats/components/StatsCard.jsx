import React, { useState, useEffect } from "react";
import { getWeeklyTotals } from "../../../utils/getWeeklyTotals";

function StatsCard() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const c = await getWeeklyTotals("calories", "calories");
      setTotal(c);
    }

    fetchData();
  }, []);
  return (
    <section className="flex flex-col gap-1 items-center mt-5">
      <h1 className="text-[9vw] font-bold">{total} Kcal</h1>
      <p className="text-[4vw] text-[#f88415]">Total Kilocalries</p>
    </section>
  );
}

export default StatsCard;
