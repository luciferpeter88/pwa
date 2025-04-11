// userService.js
import { db } from "./db";

export default async function registerUser(name, email, password) {
  // Optional: check for existing email
  const existing = await db.users.where("email").equals(email).first();
  if (existing) return { success: false, message: "Email exists!" };
  await db.users.add({ name, email, password });
  return { success: true, message: "Successfull Registration" };
}
