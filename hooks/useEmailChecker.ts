import { isEmailAvailable } from "@/actions/client";
import { debugLog } from "@/functions/debug";
import { ServiceStatus } from "@/types";
import { __validators } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSimpleDebounce } from "./useSimpleDebounce";

export function useEmailChecker() {
  const [status, setStatus] = useState<ServiceStatus>("idle");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [debouncedValue] = useSimpleDebounce(email, 1000);

  useEffect(() => {
    setStatus("idle");
    if (!!email.trim() && __validators.email.safeParse(email).success) {
      setEmailError(undefined);
    } else if (email.trim().length > 0) {
      setEmailError("Invalid email");
    } else {
      setEmailError(undefined);
    }
  }, [email]);

  const { data, isLoading } = useQuery({
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
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
