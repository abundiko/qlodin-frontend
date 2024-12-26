"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import {
  __endpoints,
  __paths,
  __validators,
  __cookies,
  ApiRequest,
} from "@/utils";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  email: __validators.email,
  password: __validators.password,
});

type FormType = z.infer<typeof schema>;

export async function signInAction(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);

  // validate the input fields
  const tryParse = schema.safeParse(data);
  if (!tryParse.success)
    return {
      error: "Email or Password is incorrect",
      // fieldErrors: tryParse.error.flatten().fieldErrors,
    };

  const [res, error] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.signIn,
    data
  );
  if (error || !res) return { error: "Connection failed" };

  if (res.status === 200) {
    const { token, user } = res.data;
    const { get, delete: del, set } = await cookies();
    set(__cookies.user_token, token);
    // if they have no first or last name, redirect to complete profile
    if (!user.firstName || !user.lastName) {
      redirect(__paths.signUpCompleteProfile, RedirectType.replace);
    }
    // get the next_path saved in the cookie and delete it later
    const nextPath = get(__cookies.next_path)?.value ?? __paths.user;
    del(__cookies.next_path);
    redirect(nextPath, RedirectType.replace);
  } else
    return {
      error: res.message ?? "Something went wrong, please try again",
    };
}
