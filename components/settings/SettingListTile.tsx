import Link from "next/link";
import { ReactNode } from "react";
import { FaCaretRight } from "react-icons/fa6";

export type SettingListTileProps = {
  prefix?: ReactNode;
  children: ReactNode;
  href?: string;
};
export default function SettingListTile({
  prefix,
  children,
  href = "#",
}: SettingListTileProps) {
  return (
    <Link
      href={href}
      className="flex flex-row items-center gap-4 max-md:text-sm text-dark-800 justify-between py-2 w-full hover:border-b"
    >
      {prefix}
      <p className="font-medium flex-1">{children}</p>
      <FaCaretRight />
    </Link>
  );
}
