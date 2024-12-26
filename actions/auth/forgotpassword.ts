"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __endpoints, __paths, __validators, ApiRequest } from "@/utils";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: __validators.email,
  resetCode: __validators.otp6.optional(),
  newPassword: __validators.password.optional(),
  confirmPassword: __validators.password.optional(),
});

type FormType = z.infer<typeof schema>;

export async function forgotpasswordActions(
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

  if (data.newPassword && data.confirmPassword && data.resetCode) {
    // resetting password
    if (data.newPassword !== data.confirmPassword)
      return {
        fieldErrors: {
          newPassword: ["Passwords do not match"],
          confirmPassword: ["Passwords do not match"],
        },
      };

    const [res, error] = await ApiRequest.post<ApiResponse>(
      __endpoints.user.auth.forgotPasswordReset,
      data
    );
    if (error || !res) return { error: "Connection failed" };

    if (res.status === 200) redirect(__paths.signIn, RedirectType.replace);
    else
      return {
        error: res.message ?? "Something went wrong, please try again",
      };
  } else {
    // when they are verifying email
    const [res, error] = await ApiRequest.post<ApiResponse>(
      __endpoints.user.auth.forgotPassword,
      data
    );
    if (error || !res) return { error: "Connection failed" };

    if (res.status === 200)
      return {
        success: "Reset code sent to your email",
      };
    else
      return {
        error: res.message ?? "Something went wrong, please try again",
      };
  }
}
