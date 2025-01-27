"use server";

import { debugLog } from "@/functions/debug";
import { formDataToObject, removeEmptyFields } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __endpoints, __validators, ApiRequest } from "@/utils";
import { z } from "zod";

const schema = z.object({
  firstName: __validators.properName.optional(),
  lastName: __validators.properName.optional(),
  link: __validators.url.optional(),
  bio: __validators.bio.optional(),
});

type FormType = z.infer<typeof schema>;

export async function updateProfileAction(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = removeEmptyFields(formDataToObject<FormType>(formData));

  // validate the input fields
  const tryParse = schema.safeParse(data);
  if (!tryParse.success)
    return {
      error: "Fix erros and submit",
      fieldErrors: tryParse.error.flatten().fieldErrors,
    };

  const [res, error] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.account.updateProfile,
    data
  );
  if (error || !res) return { error: "Connection failed. Please try again" };

  debugLog(res);

  if (res.status === 200) {
    return {
      success: "Profile updated successfully",
      data: {
        user: res.data.user,
      },
    };
  } else
    return {
      error:
        res.error ?? res.message ?? "Something went wrong, please try again",
    };
}
