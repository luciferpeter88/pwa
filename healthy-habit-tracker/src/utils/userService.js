// userService.js
import { db } from "./db";

export async function registerUser(name, email, password) {
  // Optional: check for existing email
  const existing = await db.users.where("email").equals(email).first();
  if (existing) throw new Error("Email already exists");

  return db.users.add({ name, email, password });
}
