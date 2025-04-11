import { db } from "./db";
import { getLoggedInUser } from "./auth";

export async function addCalorieEntry(date, time, kcal) {
  const { userID } = getLoggedInUser();
  console.log("User ID:", userID);
  if (!userID) return;

  await db.calories.add({
    userID: userID,
    date: date,
    time: time,
    calories: kcal,
  });
}
