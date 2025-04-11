// userService.js
import { db } from "./db";

export async function registerUser(name, email, password) {
  // Optional: check for existing email
  const existing = await db.users.where("email").equals(email).first();
  if (existing) return { success: false, message: "Email exists!" };
  await db.users.add({ name, email, password });
  return { success: true, message: "Successfull Registration" };
}

export async function loginUser(email, password) {
  // get the user by email
  const user = await db.users.where("email").equals(email).first();
  // check if the user exists
  if (!user) {
    return { success: false, reason: "User is not found!" };
  }

  if (user.password !== password) {
    return { success: false, reason: "Invalid credential!" };
  }

  return { success: true, user };
}
