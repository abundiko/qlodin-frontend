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
        }  ${
          isExpanded
            ? "md:!ml-[clamp(180px,_30vw,_250px)]"
            : "md:!ml-[clamp(100px,_15vw,_140px)]"
        } ${className}`
      )}
    />
  );
}
