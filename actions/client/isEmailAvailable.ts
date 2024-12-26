import { ApiResponse } from "@/types";
import { ApiRequest, __endpoints } from "@/utils";

export async function isEmailAvailable(email: string) {

  const [req, err] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.emailAvailabity,
    { email }
  );

  if (err || !req) return "connection failed";
  if (req.status === 400) return "email already taken";
  if (req.status !== 200) return "failed to check email";
  return true;
}
