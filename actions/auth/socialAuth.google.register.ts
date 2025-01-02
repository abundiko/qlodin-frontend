"use server";

import { debugLog } from "@/functions/debug";
import { __cookies } from "@/utils";
import { sign } from "jsonwebtoken";
import { cookies } from "next/headers";

export type GoogleRegisterData = {
  email: string;
  firstName?: string;
  lastName?: string;
  googleId: string;
};

export async function googleRegisterAction(user: GoogleRegisterData) {
  try {
    // encrypt the details from google and save to the cookies
    const { set } = await cookies();
    const encryptedDetails = sign(user, process.env.JWT_SECRET ?? "", {
      expiresIn: 60 * 60,
    });
    set(__cookies.google_register_data, encryptedDetails);
    return true;
  } catch (error) {
    debugLog({
      error,
      "@": "googleRegisterAction",
    });
    return false;
  }
}
