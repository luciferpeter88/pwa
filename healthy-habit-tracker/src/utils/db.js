import Dexie from "dexie";

export const db = new Dexie("HabitTrackerDB");

// Adatbázis verzió és tábla séma
// Minden habit tartalmaz egyedi id-t, nevet, státuszt és a hozzá tartozó dátumot
// A date mező alapján tudunk naponként szűrni

db.version(1).stores({
  users: "++id, name, email, password",
  // userID is a foreign key to the users table
  calories: "++id, userID, date, calories, time",
  // habits: "++id, date, name, completed",
  // sleep: "++id, date, start, end",
  // calories: "++id, date, calories, time",
  // steps: "++id, date, steps",
});
