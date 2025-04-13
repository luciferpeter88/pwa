import { db } from "./db";
import dateConversation from "./dateConvertion";

export async function deleteTodaysData(tableName) {
  const today = dateConversation().currentDate();
  const deletedCount = await db[tableName].where("date").equals(today).delete();
  return deletedCount;
}
