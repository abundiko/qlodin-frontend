import { useState } from "react";
import { useDebounce } from "react-use";

export function useSimpleDebounce<T = string>(val: T, delay = 2000) {
  const [debouncedValue, setDebouncedValue] = useState(val);

  const [, cancel] = useDebounce(
    () => {
      setDebouncedValue(val);
    },
    delay,
    [val]
  );

  return [ debouncedValue, cancel ] as const;
}
