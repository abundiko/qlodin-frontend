"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import {
  __cookies,
  __endpoints,
  __paths,
  __validators,
  ApiRequest,
} from "@/utils";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: __validators.email,
  resetCode: __validators.otp6.optional(),
  password: __validators.password.optional(),
  confirmPassword: __validators.password.optional(),
  token: z.string().optional(),
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

  if (data.password && data.confirmPassword && data.token) {
    // resetting password
    if (data.password !== data.confirmPassword)
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

    if (res.status === 200) {
      const { token } = res.data;
      const { set } = await cookies();
      set(__cookies.user_token, token);

      // set the toast
      set(
        __cookies.alert_toast,
        JSON.stringify({ message: "Welcome back!", type: "success" })
      );
      redirect(__paths.user, RedirectType.replace);
    } else
      return {
        error: res.message ?? "Something went wrong, please try again",
      };
  }
  if (data.resetCode) {
    // validating email and reset code
    const [res, error] = await ApiRequest.post<ApiResponse>(
      __endpoints.user.auth.forgotPasswordVerifyCode,
      data
    );
    if (error || !res) return { error: "Connection failed" };

    // console.log({ res });

    if (res.status === 200)
      return {
        success: "Provide your new password",
        data: { token: res.data.token },
      };
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
    console.log({ res, error });

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
