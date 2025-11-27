"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

async function register(values: z.infer<typeof RegisterSchema>) {
  console.log("Logging in with values:", values);
  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    console.log("Validation failed:", validateFields.error);
    return { error: "Invalid fields!" };
  }

  return { success: "Email Sent!" };
}

export { register };
  