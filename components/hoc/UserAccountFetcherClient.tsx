"use client";

import { debugLog } from "@/functions/debug";
import { useUserStore } from "@/stores";
import { UserType } from "@/types/user";
import { useEffect } from "react";

export default function UserAccountFetcherClient({
  user,
}: {
  user: UserType | null;
}) {
  const setUser = useUserStore((s) => s.setUser);

  useEffect(() => {
    debugLog({ user });
    setUser(user);
  }, [user]);

  return <div></div>;
}
