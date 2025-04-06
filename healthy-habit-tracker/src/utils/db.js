import Dexie from "dexie";

export const db = new Dexie("HealthyHabitDB");

db.version(1).stores({
  habits: "++id,name,createdAt",
  logs: "++id,date,habitId,completed",
  audioLogs: "++id,date,blob",
});
