'use client'

import { memo, ReactNode, Suspense, useEffect, useState } from "react";

export function DelayRender({
  children,
  milliseconds = 100,
  fallback,
}: {
  children: ReactNode;
  milliseconds?: number;
  fallback?: ReactNode;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setReady(true);
    }, milliseconds);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Suspense fallback={fallback}>{!ready ? fallback : children}</Suspense>
  );
}

export default memo(DelayRender);
