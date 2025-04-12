import { db } from "./db";
import { getLoggedInUser } from "./auth";
import dateConversation from "./dateConvertion";

// get the table and filed name
export async function getTodayValue(tableName, field) {
  const { userID } = getLoggedInUser();
  if (!userID) return 0;
  const { currentDate } = dateConversation();
  const today = currentDate();

  const entry = await db[tableName].where({ userID, date: today }).first();

  return entry ? entry[field] : 0;
}
