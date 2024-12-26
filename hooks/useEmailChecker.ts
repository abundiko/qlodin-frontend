import { ApiResponse, ServiceStatus } from "@/types";
import { __endpoints, __validators, ApiRequest } from "@/utils";
import { useEffect, useState } from "react";
import { useSimpleDebounce } from "./useSimpleDebounce";
import { useQuery } from "@tanstack/react-query";
import { debugLog } from "@/functions/debug";

async function isEmailAvailable(email: string) {
  if (email.startsWith("wow")) return true;

  const [req, err] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.emailAvailabity,
    { email }
  );

  if (err || !req) return "connection failed";
  if (req.status === 400) return "email already taken";
  if (req.status !== 200) return "failed to check email";
  return true;
}

export function useEmailChecker() {
  const [status, setStatus] = useState<ServiceStatus>("idle");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [debouncedValue] = useSimpleDebounce(email);

  useEffect(() => {
    if (!!email.trim() && __validators.email.safeParse(email).success) {
      setEmailError(undefined);
    } else if (email.trim().length > 0) {
      setEmailError("Invalid email");
    } else {
      setEmailError(undefined);
    }
  }, [email]);

  const { data, isLoading } = useQuery({
    queryKey: ["check_email", debouncedValue],
    queryFn: async () => {
      setStatus("loading");
      debugLog("checking email availability");
      if (emailError || !debouncedValue) return null;
      return isEmailAvailable(debouncedValue);
    },
  });

  useEffect(() => {
    if (isLoading) setStatus("loading");
    else if (data === true) {
      setStatus("success");
      setEmailError(undefined);
    } else if (typeof data === "string") {
      setStatus("error");
      setEmailError(data);
    } else {
      setStatus("idle");
    }
  }, [data, isLoading]);

  return {
    status,
    email,
    setEmail,
    emailError,
  };
}
