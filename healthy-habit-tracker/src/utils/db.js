import Dexie from "dexie";

export const db = new Dexie("HabitTrackerDB");
db.version(1).stores({
  users: "++id, name, email, password",
  calories: "++id, userID, date",
  water: "++id, userID, date",
  steps: "++id, userID, date",
  dailyGoals: "++id, userId, date",
});
