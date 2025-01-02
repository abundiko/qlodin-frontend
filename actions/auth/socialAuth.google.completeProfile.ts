"use server";

import { debugLog } from "@/functions/debug";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __cookies, __endpoints, __paths, __validators } from "@/utils";
import { AuthRequest } from "@/utils/authRequest";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  firstName: __validators.properName,
  lastName: __validators.properName,
  userName: __validators.userName,
  mobileNumber: __validators.phone,
  dateOfBirth: __validators.dateOfBirth,
  gender: z.string().min(2, "Please select a gender"),
});

type FormType = z.infer<typeof schema>;

export async function googleRegisterCompleteProfileAction(
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

  const [res, error] = await AuthRequest.post<ApiResponse>(
    __endpoints.user.auth.googleRegister,
    data
  );
  if (error || !res) return { error: "Connection failed" };

  debugLog(res);

  if (res.status === 200) {
    const { get, delete: del } = await cookies();
    const nextPath = get(__cookies.next_path)?.value ?? __paths.user;
    del(__cookies.next_path);
    del(__cookies.google_register_data);
    redirect(nextPath, RedirectType.replace);
  } else
    return {
      error:
        res.error ?? res.message ?? "Something went wrong, please try again",
    };
}
