import { ApiResponse } from "@/types";
import { __endpoints, ApiRequest } from "@/utils";

export async function signUpVerifyEmailResendCodeAction(
  email: string
): Promise<boolean> {
  const [res, error] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.signUpVerifyEmailResendCode,
    { email }
  );
  if (error || !res) return false;
  return res.status === 200;
}
