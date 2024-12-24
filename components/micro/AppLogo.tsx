import { AppPath } from "@/types";
import { __paths } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function AppLogo({
  size = 40,
  onClick,
}: {
  size?: number;
  onClick?: () => void | AppPath;
}) {
  const logo = (
    <Image
      height={size}
      width={size}
      style={{
        height: size,
        width: size,
      }}
      src="/qlodin-logo.png"
      alt="Qlodin logo"
    />
  );

  return (
    <Link
      href={
        typeof onClick === "string" ? onClick : !onClick ? "#" : __paths.index
      }
      onClick={typeof onClick !== "string" ? onClick : undefined}
    >
      {logo}
    </Link>
  );
}
