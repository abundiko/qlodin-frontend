"use server";

import { debugLog } from "@/functions/debug";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __cookies, __endpoints, __paths, __validators, ApiRequest } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: __validators.email,
  password: __validators.password,
});

type FormType = z.infer<typeof schema>;

export async function signUpAction(
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
    __endpoints.user.auth.signUp,
    data
  );
  if (error || !res) return { error: "Connection failed" };

  debugLog(res);

  if (res.status === 201) {
    const { set } = await cookies();
    // set the user's email to the cookie (1 day)
    set(__cookies.register_state, data.email, { maxAge: 60 * 60 * 24 });
    redirect(__paths.signUpVerifyEmail);
  } else
    return {
      error:
        res.error ?? res.message ?? "Something went wrong, please try again",
    };
}
