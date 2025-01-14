"use client";

import { useGlobalStore } from "@/stores";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { motion } from "framer-motion";

export type MainLayoutSidebarButtonProps = {
  icon: ReactNode;
  label: string;
  circle?: boolean;
} & LinkProps;

export default function MainLayoutSidebarButton({
  icon,
  label,
  circle,
  ...props
}: MainLayoutSidebarButtonProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(props.href.toString());
  const isExpanded = useGlobalStore((s) => s.mainSidebarOpen);

  return (
    <Link
      {...props}
      title={label}
      className={`flex items-center text-lg md:text-xl py-2 gap-3 overflow-hidden hover:bg-neutral-200 ${
        isActive ? "!bg-figma-primary" : ""
      } ${
        !isExpanded ? "aspect-square justify-center w-12 px-2 mx-auto" : "px-4"
      } ${isActive ? "text-white font-semibold" : ""} 
      ${circle && !isExpanded ? "rounded-full" : "rounded-xl"}`}
    >
      {icon}
      {isExpanded && (
        <motion.span
          initial={{ minWidth: 100 }}
          exit={{ minWidth: 0 }}
          className={`font-quicksand transition-all inline-block`}
        >
          {label}
        </motion.span>
      )}
    </Link>
  );
}
