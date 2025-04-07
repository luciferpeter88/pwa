import { db } from "../utils/db";

async function fetchHabitsFromDB() {
  const all = await db.habits.toArray();
  const byDate = {};
  // loop through all habits and group them by date
  for (const habit of all) {
    // if the date is not in the byDate object, create an empty array
    if (!byDate[habit.date]) byDate[habit.date] = [];
    // else push the habit into the array
    byDate[habit.date].push(habit);
  }
  return byDate;
}
export default fetchHabitsFromDB;
