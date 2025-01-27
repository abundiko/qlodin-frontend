"use server";

import { debugLog } from "@/functions/debug";
import { ApiResponse, ServiceResponse } from "@/types";
import { UserType } from "@/types/user";
import { __endpoints } from "@/utils";
import { AuthRequest } from "@/utils/authRequest";

export async function getUserProfileAction(): Promise<
  ServiceResponse<UserType, string>
> {
//   if (!(await cookies()).has(__cookies.user_token)) redirect(__paths.signIn);

  const [res, err] = await AuthRequest.get<ApiResponse>(
    __endpoints.user.account.getProfile
  );
  debugLog({ res, err });

  if (err || !res) return [null, "Connection failed! Please try again"];

  if (res.status === 200) return [res.data.user, null];

  return [null, res.message];
}
