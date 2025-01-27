"use server";

import { debugLog } from "@/functions/debug";
import { ApiResponse, ServiceResponse } from "@/types";
import { UserType } from "@/types/user";
import { __cookies, __endpoints, __paths } from "@/utils";
import { AuthRequest } from "@/utils/authRequest";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getUserProfileAction(): Promise<
  ServiceResponse<UserType, string>
> {
//   if (!(await cookies()).has(__cookies.user_token)) redirect(__paths.signIn);

  const [res, err] = await AuthRequest.get<ApiResponse>(
    __endpoints.user.account.getProfile
  );
  debugLog({ res, err });

  if (err || !res) return [null, "Connection failed! Please try again"];

  if (res.status === 200) return [res.data, null];

  return [null, res.message];
}
