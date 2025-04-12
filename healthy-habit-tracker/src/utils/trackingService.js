import { db } from "./db";
import { getLoggedInUser } from "./auth";

// export async function addCalorieEntry(date, time, kcal) {
//   const { userID } = getLoggedInUser();
//   console.log("User ID:", userID);
//   if (!userID) return;

//   await db.calories.add({
//     userID: userID,
//     date: date,
//     time: time,
//     calories: kcal,
//   });
// }

// export async function addWaterEntry(date, time, water) {
//   const { userID } = getLoggedInUser();
//   if (!userID) return;

//   await db.water.add({
//     userID: userID,
//     date: date,
//     time: time,
//     water: water,
//   });
// }

// export async function addStepEntry(date, time, steps) {
//   const { userID } = getLoggedInUser();
//   if (!userID) return;
//   await db.steps.add({
//     userID: userID,
//     date: date,
//     time: time,
//     steps: steps,
//   });
// }

export async function addCalorieEntry(date, kcal) {
  const { userID } = getLoggedInUser();
  if (!userID) return;

  const existing = await db.calories.where({ userID, date }).first();

  if (existing) {
    await db.calories.update(existing.id, {
      calories: existing.calories + kcal,
    });
  } else {
    await db.calories.add({
      userID,
      date,
      calories: kcal,
    });
  }
}

export async function addWaterEntry(date, water) {
  const { userID } = getLoggedInUser();
  if (!userID) return;

  const existing = await db.water.where({ userID, date }).first();

  if (existing) {
    await db.water.update(existing.id, {
      water: existing.water + water,
    });
  } else {
    await db.water.add({
      userID,
      date,
      water,
    });
  }
}
export async function addStepEntry(date, steps) {
  const { userID } = getLoggedInUser();
  if (!userID) return;

  const existing = await db.steps.where({ userID, date }).first();

  if (existing) {
    await db.steps.update(existing.id, {
      steps: existing.steps + steps,
    });
  } else {
    await db.steps.add({
      userID,
      date,
      steps,
    });
  }
}
