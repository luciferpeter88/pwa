import { db } from "./db";
import { getLoggedInUser } from "./auth";

export async function getWeeklyTotals(table, field) {
  const { userID } = getLoggedInUser();
  if (!userID) return 0;

  const now = new Date();
  const weekAgo = new Date();
  // calculate the date 6 days ago from today to get a full week
  weekAgo.setDate(now.getDate() - 6);

  const from = weekAgo.toISOString().split("T")[0];
  const to = now.toISOString().split("T")[0];

  const data = await db[table]
    .where("userID")
    .equals(userID)
    .and((entry) => entry.date >= from && entry.date <= to)
    .toArray();

  return data.reduce((total, item) => total + (item[field] || 0), 0);
}
