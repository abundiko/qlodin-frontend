"use server";

import { debugLog } from "@/functions/debug";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __endpoints, __paths, __validators } from "@/utils";
import { AuthRequest } from "@/utils/authRequest";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  email: __validators.email,
  otp: __validators.otp6.optional(),
});

type FormType = z.infer<typeof schema>;

export async function updateEmailAction(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);

  // validate the input fields
  const tryParse = schema.safeParse(data);
  if (!tryParse.success)
    return {
      error: "Fix erros and submit",
      fieldErrors: tryParse.error.flatten().fieldErrors,
    };

  // if there's an otp
  if (data.otp) {
    debugLog("has otp");
    const [res, error] = await AuthRequest.post<ApiResponse>(
      __endpoints.user.account.updateEmailVerify,
      data
    );
    if (error || !res) return { error: "Connection failed. Please try again" };

    debugLog({ res });

    if (res.status === 200) {
      revalidatePath(__paths.user);
      return {
        success: "Email changed successfully",
        data: {
          user: res.data.user,
          next: "email"
        },
      };
    } else
      return {
        error:
          res.error ?? res.message ?? "Something went wrong, please try again",
      };
  } else {
    // if its just email

    const [res, error] = await AuthRequest.post<ApiResponse>(
      __endpoints.user.account.updateEmail,
      { ...data, newEmail: data.email }
    );
    if (error || !res) return { error: "Connection failed. Please try again" };

    debugLog({ res });

    if (res.status === 200)
      return {
        success: "Verify email to continue",
        data: { next: "verify" },
      };
    else
      return {
        error:
          res.error ?? res.message ?? "Something went wrong, please try again",
      };
  }
}
