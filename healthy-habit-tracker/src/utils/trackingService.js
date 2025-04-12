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

export async function addWaterEntry(date, time, water) {
  const { userID } = getLoggedInUser();
  if (!userID) return;

  await db.water.add({
    userID: userID,
    date: date,
    time: time,
    water: water,
  });
}

export async function addStepEntry(date, time, steps) {
  const { userID } = getLoggedInUser();
  if (!userID) return;
  await db.steps.add({
    userID: userID,
    date: date,
    time: time,
    steps: steps,
  });
}
