"use client";

import { __cookies } from "@/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useCookie } from "react-use";

export default function AlertToastListener() {
    const pathname = usePathname();
  const [alertToast, , deleteAlert] = useCookie(__cookies.alert_toast);

  useEffect(() => {
    if (!alertToast) return;
    try {
      const { message, type } = JSON.parse(alertToast);
      if (type === "success") toast.success(message);
      if (type === "error") toast.error(message);
    } catch (error) {
    } finally {
      deleteAlert();
    }
  }, [alertToast, pathname]);

  return <></>;
}
