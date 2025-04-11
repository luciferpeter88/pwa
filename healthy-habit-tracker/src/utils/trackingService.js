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

// export async function addWaterEntry(amount) {
//   const userId = getLoggedInUserId();
//   if (!userId) return;

//   await db.water.add({
//     amount,            // in ml
//     timestamp: Date.now(),
//     userId,
//   });
// }

// export async function addStepEntry(count) {
//     const userId = getLoggedInUserId();
//     if (!userId) return;

//     await db.steps.add({
//       count,
//       timestamp: Date.now(),
//       userId,
//     });
//   }
