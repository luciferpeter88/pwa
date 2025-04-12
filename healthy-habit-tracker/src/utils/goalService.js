import { db } from "./db";
import dateConversation from "./dateConvertion";

const { formatDate } = dateConversation();
// This function sets a daily goal for a specific user and date.
export async function setDailyGoal(userId, date = new Date(), goalData) {
  const formattedDate = formatDate(date);
  // Check if a goal already exists for the user on that date
  const existing = await db.dailyGoals
    .where({ userId, date: formattedDate })
    .first();
  // If it exists, update it; otherwise, create a new one
  if (existing) {
    await db.dailyGoals.update(existing.id, goalData);
  } else {
    await db.dailyGoals.add({
      userId,
      date: formattedDate,
      ...goalData,
    });
  }
}
// This function retrieves the daily goal for a specific user and date.
export async function getDailyGoal(userId, date = new Date()) {
  const formattedDate = formatDate(date);

  return await db.dailyGoals.where({ userId, date: formattedDate }).first();
}
