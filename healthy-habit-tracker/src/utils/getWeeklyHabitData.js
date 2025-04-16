import { db } from "./db";
import { getLoggedInUser } from "./auth";
import dateConversation from "./dateConvertion";
const { formatDate } = dateConversation();

export async function getWeeklyHabitData(table, field) {
  const { userID } = getLoggedInUser();
  if (!userID) return Array(7).fill(0);

  //  Számoljuk ki a hétfő dátumát:
  const today = new Date();
  const dayOfWeek = (today.getDay() + 6) % 7; // Mon=0, …, Sun=6
  const monday = new Date(today);
  monday.setDate(today.getDate() - dayOfWeek);

  //  Hétfőtől vasárnapig építjük a dátum-tömböt:
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return formatDate(d);
  });

  // Lekérjük az adott tábla bejegyzéseit a hét napjaira
  const entries = await db[table]
    .where("userID")
    .equals(userID)
    .and((entry) => weekDates.includes(entry.date))
    .toArray();

  //  Map-elünk: minden naphoz vagy bejegyzés, vagy 0
  return weekDates.map((date) => {
    const entry = entries.find((e) => e.date === date);
    return entry?.[field] || 0;
  });
}
