import { useState } from "react";
import { useTurnstile } from "react-turnstile";

export function useTurnstileCaptcha() {
  const [token, setToken] = useState<string | null>(null);
  const turnstile = useTurnstile();

  return { token, onTokenChange: setToken, turnstile };
}
