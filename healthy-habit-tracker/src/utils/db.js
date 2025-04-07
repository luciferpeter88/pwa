// db.js – Dexie adatbázis konfiguráció (Habit Tracker)
import Dexie from "dexie";

export const db = new Dexie("HabitTrackerDB");

// Adatbázis verzió és tábla séma
// Minden habit tartalmaz egyedi id-t, nevet, státuszt és a hozzá tartozó dátumot
// A date mező alapján tudunk naponként szűrni

db.version(1).stores({
  habits: "id, date, name, completed",
  sleep: "id, date, start, end",
});
