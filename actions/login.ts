"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

async function login(values: z.infer<typeof LoginSchema>) {
  console.log("Logging in with values:", values);
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields.success) {
    console.log("Validation failed:", validateFields.error);
    return { error: "Invalid fields!" };
  }

  return { success: "Email Sent!" };
}

export { login };
