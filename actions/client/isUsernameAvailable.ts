// 'use server'

import { debugLog } from "@/functions/debug";
import { ApiResponse } from "@/types";
import { ApiRequest, __endpoints } from "@/utils";

export async function isUsernameAvailable(userName: string) {

  const [req, err] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.usernameAvailabity,
    { username: userName }
  );

  debugLog({req, err})

  if (err || !req) return "connection failed";
  if (req.status === 400) return "username already taken";
  if (req.status !== 200) return "failed to check username";
  return true;
}
