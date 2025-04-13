import { db } from "./db";
import { getLoggedInUser } from "./auth";
import dateConversation from "./dateConvertion";

const { formatDate, currentDate } = dateConversation();

export async function getWeeklyHabitData(table, field) {
  console.log("current date", currentDate());
  const { userID } = getLoggedInUser();
  if (!userID) return [];
  // get the current date
  const today = new Date();
  const days = [];
  console.log("today", today);
  // loop through the last 7 days backwards because we want to get the last 7 days from today
  for (let i = 6; i >= 0; i--) {
    const day = new Date();
    day.setDate(today.getDate() - i);
    // put into the array in the format YYYY-MM-DD
    days.push(formatDate(day));
  }
  // get the table based on the table name
  const entries = await db[table]
    .where("userID")
    .equals(userID)
    .and((entry) => days.includes(entry.date))
    .toArray();
  // create an array of objects with the date and the field value
  return days.map((date) => {
    const entry = entries.find((e) => e.date === date);
    return entry?.[field] || 0;
  });
}
