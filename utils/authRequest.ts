import { cookies } from "next/headers";
import { ServiceResponse } from "../types";
import { __cookies } from "./cookies";
import { redirect } from "next/navigation";
import { __paths } from "./paths";

export const AuthRequest = {
  get<T = any>(url: string) {
    return appServerFetch<T>(url, {});
  },
  post<T = any>(url: string, body: any) {
    return appServerFetch<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  },
  patch<T = any>(url: string, body: any) {
    return appServerFetch<T>(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  },
};

export async function appServerFetch<T = any>(
  url: string,
  init: RequestInit
): Promise<ServiceResponse<T>> {
  try {
    const { get } = await cookies();
    const token = get(__cookies.user_token)?.value;
    if (!token) redirect(__paths.signIn);

    const req = await fetch(url, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...init.headers,
      },
    });    

    const data = await req.json();
    if (data) return [data, null];
    return [null, false];
  } catch (error) {
    return [null, error];
  }
}
