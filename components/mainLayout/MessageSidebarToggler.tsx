"use client";

import { useGlobalStore } from "@/stores";
import { AppIcons } from "../icons/AppIcons";
import { BsChevronLeft } from "react-icons/bs";
import MessageSidebar from "./MessageSidebar";
import AlertsSidebar from "./AlertsSidebar";
import { useClickAway } from "react-use";
import { useRef } from "react";

export default function MessageSidebarToggler() {
  const isExpanded = useGlobalStore((s) => !s.mainSidebarOpen);
  const setExpanded = useGlobalStore((s) => s.setMainSidebarOpen);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    setExpanded(true);
  });

  return (
    <div
      ref={ref}
      className={`rounded-l-3xl flex flex-col justify-stretch shadow-xl fixed z-30 right-0 transition-all duration-500 top-1/2 -translate-y-1/2 bg-white 
    ${isExpanded ? "w-[370px] h-[80vh] p-6" : "w-16 h-16 aspect-square"}
    `}
    >
      <div
        className={`flex justify-between max-h-20 ${
          isExpanded ? "h-auto" : "h-full"
        } `}
      >
        {isExpanded && (
          <h4 className="font-semibold font-playfair text-2xl">Messages</h4>
        )}
        <button
          title="toggle panel"
          onClick={() => setExpanded(isExpanded)}
          className={`inline-flex justify-between items-center ${
            !isExpanded ? "w-full h-full p-2" : "w-fit"
          }`}
        >
          {!isExpanded && <BsChevronLeft />}
          <AppIcons.message />
        </button>
      </div>
      {isExpanded && (
        <div className="flex flex-col flex-grow justify-stretch h-[calc(80vh-48px-36px)]">
          <MessageSidebar />
          <AlertsSidebar />
        </div>
      )}
    </div>
  );
}
