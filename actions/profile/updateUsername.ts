"use server";

import { debugLog } from "@/functions/debug";
import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types";
import { __endpoints, __paths, __validators } from "@/utils";
import { AuthRequest } from "@/utils/authRequest";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  userName: __validators.userName,
});

type FormType = z.infer<typeof schema>;

export async function updateUsernameAction(
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
    __endpoints.user.account.updateUsername,
    data
  );
  if (error || !res) return { error: "Connection failed. Please try again" };

  debugLog({ res });

  if (res.status === 200) {
    revalidatePath(__paths.user);
    return {
      success: "Driptag updated successfully",
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
