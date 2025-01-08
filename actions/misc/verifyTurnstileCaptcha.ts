"use server";

import { debugLog } from "@/functions/debug";
import { __endpoints, ApiRequest } from "@/utils";
import { headers } from "next/headers";

export async function verifyTurnstileCaptcha(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const H = await headers();
  const remoteip = H.get("x-forwarded-for") ?? "";

  const [res, err] = await ApiRequest.post(
    __endpoints.cloudflare.verifyTurnstileCaptcha,
    {
      secret,
      response: token,
      remoteip,
    }
  );

  debugLog({ err, res });

  if (err || !res || !res.success) return false;
  return true;
}
