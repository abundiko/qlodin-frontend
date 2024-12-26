import { debugLog } from "@/functions/debug";
import { ServiceResponse } from "@/types";

export const ApiRequest = {
  post<T = any>(url: string, body: any) {
    debugLog(body);
    return customFetch<T>(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15 * 1000), // 10 seconds
    });
  },
  patch<T = any>(url: string, body: any) {
    debugLog(body);
    return customFetch<T>(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15 * 1000), // 10 seconds
    });
  },
  postFormData<T = any>(url: string, body: any, timeout: boolean = true) {
    debugLog(body);
    return customFetch<T>(url, {
      method: "POST",
      body,
      signal: timeout ? AbortSignal.timeout(15 * 1000) : undefined, // 10 seconds
    });
  },
  get<T = any>(url: string, { headers, ...others }: RequestInit) {
    debugLog("backend:", url);
    return customFetch<T>(url, {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      signal: AbortSignal.timeout(15 * 1000), // 10 seconds
      ...others,
    });
  },
};

async function customFetch<T = any, E = any>(
  url: string,
  options: RequestInit
): Promise<ServiceResponse<T, E>> {
  try {
    const req = await fetch(url, {
      ...options,
      signal: AbortSignal.timeout(15 * 1000), // 10 seconds
    });
    // debugLog("text:", await req.text());
    return [(await req.json()) as T, null];
  } catch (error) {
    return [null, error as E];
  }
}
