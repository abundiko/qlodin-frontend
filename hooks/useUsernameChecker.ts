import { isUsernameAvailable } from "@/actions/client";
import { debugLog } from "@/functions/debug";
import { ServiceStatus } from "@/types";
import { __validators } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useSimpleDebounce } from "./useSimpleDebounce";

export function useUsernameChecker() {
  const [status, setStatus] = useState<ServiceStatus>("idle");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState<string | undefined>(
    undefined
  );
  const [debouncedValue] = useSimpleDebounce(username, 1000);

  useEffect(() => {
    setStatus("idle");
    if (
      !!username.trim() &&
      __validators.userName.safeParse(username).success
    ) {
      setUsernameError(undefined);
    } else if (username.trim().length > 0) {
      setUsernameError(
        "should be lowercase, no spaces, only numbers or underscore allowed"
      );
    } else {
      setUsernameError(undefined);
    }
  }, [username]);

  const { data, isLoading } = useQuery({
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: ["check_username", debouncedValue],
    queryFn: async () => {
      setStatus("loading");
      debugLog("checking username availability");
      if (usernameError || !debouncedValue) return null;
      return isUsernameAvailable(debouncedValue);
    },
  });

  useEffect(() => {
    if (isLoading) setStatus("loading");
    else if (data === true) {
      setStatus("success");
      setUsernameError(undefined);
    } else if (typeof data === "string") {
      setStatus("error");
      setUsernameError(data);
    } else {
      setStatus("idle");
    }
  }, [data, isLoading]);

  return {
    status,
    username,
    setUsername,
    usernameError,
  };
}
