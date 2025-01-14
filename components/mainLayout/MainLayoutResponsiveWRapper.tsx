"use client";

import { cn } from "@/lib/utils";
import { useGlobalStore } from "@/stores";
import { HTMLAttributes } from "react";

export default function MainLayoutResponsiveWrapper({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const isExpanded = useGlobalStore((s) => s.mainSidebarOpen);

  return (
    <div
      {...props}
      className={cn(
        ` transition-all duration-75  ${
          isExpanded ? "max-w-[800px]" : "max-w-[700px]"
        } ${className}`
      )}
    />
  );
}
