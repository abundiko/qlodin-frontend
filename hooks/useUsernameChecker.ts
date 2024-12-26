import { ApiResponse, ServiceStatus } from "@/types";
import { __endpoints, ApiRequest } from "@/utils";
import { useEffect, useState } from "react";
import { useSimpleDebounce } from "./useSimpleDebounce";
import toast from "react-hot-toast";

async function isUsernameAvailable(username: string) {
  const [req, err] = await ApiRequest.post<ApiResponse>(
    __endpoints.user.auth.usernameAvailabity,
    { username }
  );

  if (err || !req) return "connection failed";
  if (req.status !== 200) return "username already taken";
  return true;
}

export function useUsernameChecker() {
  const [status, setStatus] = useState<ServiceStatus>("idle");
  const [username, setUsername] = useState("");
  const [debouncedValue] = useSimpleDebounce(username);

  useEffect(() => {
    async function checkUsername() {
      setStatus("loading");
      const res = await isUsernameAvailable(debouncedValue);
      if (res === true) {
        setStatus("success");
      } else {
        toast.error(res);
        setStatus("error");
      }
    }

    if (debouncedValue) checkUsername();
  }, [debouncedValue]);

  return {
    status,
    username,
    setUsername,
  };
}
