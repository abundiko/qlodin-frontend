"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";

export type TabButtonProps = LinkProps & {
  active?: boolean | "exact-href" | "starts-with-href";
  icon?: React.ReactNode;
  label?: string;
};

export default function TabButton({
  active,
  icon,
  label,
  className,
  href,
  ...props
}: TabButtonProps & HTMLAttributes<HTMLAnchorElement>) {
  const pathname = usePathname();
  const isActive =
    typeof active === "boolean"
      ? active
      : active === "exact-href"
      ? pathname === href
      : active === "starts-with-href"
      ? pathname.startsWith(href as string)
      : false;
      console.log({href});
      
      
  return (
    <Link
      {...props}
      href={href}
      title={label}
      className={cn(
        `btn-neutral-2 !rounded-[24px] px-2 md:px-3 !py-1.5 text-xs md:text-sm gap-1 md:gap-1.5 ${
          isActive ? "!bg-black text-neutral-100" : ""
        }`,
        className
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
