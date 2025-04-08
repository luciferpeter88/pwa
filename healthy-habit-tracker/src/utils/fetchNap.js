import { db } from "../utils/db";

async function fetchNapFromDB() {
  const all = await db.sleep.toArray();
  return all;
}
export default fetchNapFromDB;
