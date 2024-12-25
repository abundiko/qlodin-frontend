"use client";

import { useChangeSearchParams } from "@/hooks";
import { __cookies } from "@/utils";
import { useEffect } from "react";
import { useCookie } from "react-use";

/**
 * listens for the "next_path" url query param and saves it in the cookie
 *
 * when a user is redirected to login due to an action that one must be authenticated
 * to carry out, this component saves the path to the cookie
 * so that once the user logs in, it is redirected back to the desired content
 */
export function NextPathListener() {
  const [, setCookie] = useCookie(__cookies.next_path);
  const { params } = useChangeSearchParams();

  useEffect(() => {
    const nextPath = params.get(__cookies.next_path);
    if (nextPath) setCookie(nextPath);
  }, [params]);

  return <></>;
}
