"use server";

import { ApiResponse } from "@/types";
import { __cookies, __endpoints, ApiRequest } from "@/utils";
import { cookies } from "next/headers";

export async function googleLoginAction(email: string, googleId: string) {
  const [res, err] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.googleLogin,
    { email, googleId }
  );

  if (err || !res) return "Something went wrong";
  if (res.status === 404) return 404;
  if (res.status !== 200) return res.message ?? "Something went wrong";
  const { set } = await cookies();
  set(__cookies.user_token, res.data.token);
  return "success";
}
