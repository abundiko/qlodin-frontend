"use client";

import { useWindowSize } from "react-use";
import { MainLayoutBottomNavButton } from "../mainLayout";
import { MAIN_LAYOUT_SIDEBAR_BUTTONS } from "./MainLayoutSidebar";

export default function MainLayoutBottomNav() {
  const { width: vw } = useWindowSize();

  if (vw < 768)
    return (
      <aside className="rounded-2xl shadow-xl w-[95vw] bg-light-500 max-w-[350px] fixed z-40 bottom-4 left-1/2 -translate-x-1/2">
        <div className="flex justify-between p-4">
          {MAIN_LAYOUT_SIDEBAR_BUTTONS.map((btn, i) => (
            <MainLayoutBottomNavButton key={i} {...btn} />
          ))}
        </div>
      </aside>
    );
}
