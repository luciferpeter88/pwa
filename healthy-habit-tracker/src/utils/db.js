import Dexie from "dexie";

export const db = new Dexie("HabitTrackerDB");

// Adatbázis verzió és tábla séma
// Minden habit tartalmaz egyedi id-t, nevet, státuszt és a hozzá tartozó dátumot
// A date mező alapján tudunk naponként szűrni

// db.version(1).stores({
//   users: "++id, name, email, password",
//   // userID is a foreign key to the users table
//   calories: "++id, userID, date, calories, time",
//   water: "++id, userID, date, water, time",
//   steps: "++id, userID, date, steps, time",
//   dailyGoals: "++id, userId, date",
//   // habits: "++id, date, name, completed",
//   // sleep: "++id, date, start, end",
//   // calories: "++id, date, calories, time",
//   // steps: "++id, date, steps",
// });

db.version(1).stores({
  users: "++id, name, email, password",
  calories: "++id, userID, date",
  water: "++id, userID, date",
  steps: "++id, userID, date",
  dailyGoals: "++id, userId, date",
});
