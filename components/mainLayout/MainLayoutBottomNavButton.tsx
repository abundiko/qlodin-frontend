"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainLayoutSidebarButtonProps } from "./MainLayoutSidebarButton";

export default function MainLayoutBottomNavButton({
  icon,
  label,
  circle,
  ...props
}: MainLayoutSidebarButtonProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(props.href.toString());

  return (
    <Link
      {...props}
      title={label}
      className={`flex items-center rounded-xl text-lg md:text-xl p-2 aspect-square gap-3 overflow-hidden hover:bg-neutral-200 ${
        isActive ? "!bg-figma-primary" : ""
      } `}
    >
      {icon}
    </Link>
  );
}
