"use server";

import { __cookies } from "@/utils";
import { cookies } from "next/headers";

export async function setToastCookie(
  message: string,
  type: "error" | "success"
) {
  (await cookies()).set(
    __cookies.alert_toast,
    JSON.stringify({
      type,
      message,
    })
  );
}
