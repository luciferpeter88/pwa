import { getTodayValue } from "./getTodayValue";
import { getDailyGoal } from "./goalService";
import { getLoggedInUser } from "./auth";

export async function getDailyProgress(field) {
  const { userID } = getLoggedInUser();
  //
  if (!userID) return null;
  // get the data from the table, calories, water, steps
  const current = await getTodayValue(field, field);
  // get the daily goal from the table
  const goalData = await getDailyGoal(userID);
  // access the object based on the field name dinamically if there is data set tp 0
  const goal = goalData?.[`${field}Goal`] || 0;
  // calculate the percentage of the goal
  const percent =
    goal > 0 ? Math.min(100, Math.round((current / goal) * 100)) : 0;

  return { current, goal, percent };
}
