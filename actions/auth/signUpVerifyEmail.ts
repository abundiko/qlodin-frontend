"use server";

import { USER_COOKIE_MAX_AGE } from "@/constants";
import { debugLog } from "@/functions/debug";
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
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: __validators.email,
  otp: __validators.otp6,
});

type FormType = z.infer<typeof schema>;

export async function signUpVerifyEmailAction(
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

  const [res, error] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.signUpVerifyEmail,
    data
  );
  if (error || !res) return { error: "Connection failed" };

  debugLog(res);

  if (res.status === 200) {
    const { token } = res.data;
    const { set, delete:del } = await cookies();
    // delete the email cookie saved during registration
    del(__cookies.register_state);
    // set the user's token to the cookie
    set(__cookies.user_token, token, { maxAge: USER_COOKIE_MAX_AGE });
    redirect(__paths.signUpCompleteProfile);
  } else
    return {
      error:
        res.error ?? res.message ?? "Something went wrong, please try again",
    };
}
