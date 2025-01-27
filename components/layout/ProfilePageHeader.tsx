"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { MainLayoutResponsiveWrapper } from "../mainLayout";

export default function ProfilePageHeader({
  children,
}: {
  children?: ReactNode;
}) {
  const { back } = useRouter();

  return (
    <header className="bg-white shadow-md pb-4 pt-6 md:pt-10 sticky top-0 md:-top-6 left-0 z-20 max-md:rounded-b-2xl">
      <MainLayoutResponsiveWrapper className="flex justify-between app-container">
        <button onClick={back} className="btn-icon text-lg">
          <FaCaretLeft />
        </button>
        <h2 className="text-lg md:text-xl font-semibold">{children}</h2>
        <div className="w-9"></div>
      </MainLayoutResponsiveWrapper>
    </header>
  );
}
