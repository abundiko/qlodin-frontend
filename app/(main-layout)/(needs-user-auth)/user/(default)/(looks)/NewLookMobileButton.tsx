"use client";
import { __paths } from "@/utils";
import Link from "next/link";
import { AiFillPlusCircle } from "react-icons/ai";
import { useWindowSize } from "react-use";

export default function NewLookMobileButton() {
  const { width: vw } = useWindowSize();
  if (vw < 768)
    return (
      <div className="fixed bottom-[4.8rem] z-40 h-16 bg-light-50 rounded-t-[50%] left-1/2 -translate-x-1/2 w-16 p-2 pt-0 grid place-items-center">
        <Link href={__paths.newLook} className="text-3xl p-2 text-black">
          <AiFillPlusCircle />
        </Link>
      </div>
    );
}
