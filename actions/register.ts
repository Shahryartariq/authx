"use server";

import { db } from "@/lib/db";
import * as z from "zod";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcrypt";
import { get } from "http";
import { getUserByEmail } from "@/data/user";

async function register(values: z.infer<typeof RegisterSchema>) {
  console.log("Logging in with values:", values);
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    console.log("Validation failed:", validateFields.error);
    return { error: "Invalid fields!" };
  }

  const {email, password, name} =  validateFields.data; 
  const hashedPassword = await bcrypt.hash(password, 10);
  // console.log("Hashed password:", hashedPassword);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    console.log("User already exists with email:", email);
    return { error: "Email already exists!" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // TODO: SEND VERFICATION EMAIL

 
  return { success: "User Created!" };
}

export { register };
  