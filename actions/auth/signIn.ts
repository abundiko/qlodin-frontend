"use server";

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __endpoints, __paths, __validators, ApiRequest } from "@/utils";
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
      error: "Fix erros and submit",
      fieldErrors: tryParse.error.flatten().fieldErrors,
    };

  const [res, error] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.signIn,
    data
  );
  if (error || !res) return { error: "Connection failed" };

  if (res.status === 200) redirect(__paths.user, RedirectType.replace);
  else
    return {
      error: res.message ?? "Something went wrong, please try again",
    };
}
