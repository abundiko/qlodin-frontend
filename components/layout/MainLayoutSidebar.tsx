"use client";

import { useGlobalStore } from "@/stores";
import { __paths } from "@/utils";
import { AppIcons } from "../icons/AppIcons";
import MainLayoutSidebarButton, {
  MainLayoutSidebarButtonProps,
} from "../mainLayout/MainLayoutSidebarButton";
import { AppLogo } from "../micro";
import { UserAvatar } from "../user";
import { AnimatePresence } from "framer-motion";
import { MessageSidebarToggler } from "../mainLayout";
import { useWindowSize } from "react-use";
import { FaCircleUser } from "react-icons/fa6";

export default function MainLayoutSidebar() {
  const isExpanded = useGlobalStore((s) => s.mainSidebarOpen);
  const { width: vw } = useWindowSize();

  if (vw >= 768)
    return (
      <AnimatePresence mode="popLayout">
        <aside
          key={"main-layout-aside"}
          className={`transition-all duration-300 flex-shrink-0 max-md:hidden h-screen 
    ${
      isExpanded
        ? "w-[clamp(180px,_30vw,_250px)]"
        : "w-[clamp(100px,_15vw,_140px)]"
    }
     fixed top-0 left-0 z-30
  `}
        >
          <div className="py-6 h-full">
            <div className="flex justify-center h-full flex-col gap-4 p-4 bg-white shadow-[8px_4px_16px_#0000001A] rounded-r-3xl">
              <div className="flex flex-col items-center justify-center my-[5vh]">
                <AppLogo size={38} />
                <h1 className="text-[#1E1E1E] text-xl md:text-2xl font-medium font-playfair">
                  Qlodin.
                </h1>
              </div>
              <div className="flex flex-col gap-2 flex-shrink flex-grow h-auto">
                {MAIN_LAYOUT_SIDEBAR_BUTTONS.slice(0, 4).map((btn, i) => (
                  <MainLayoutSidebarButton key={i} {...btn} />
                ))}
              </div>
              <div className="">
                <MainLayoutSidebarButton
                  label="Profile"
                  circle
                  href={__paths.user}
                  icon={
                    <UserAvatar
                      src="/images/person.png"
                      height={30}
                      width={30}
                      className="overflow-hidden border-white"
                      fallbackLabel="A"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </aside>
        <MessageSidebarToggler key={"message-sidebar-toggler"} />
      </AnimatePresence>
    );
}

export const MAIN_LAYOUT_SIDEBAR_BUTTONS: MainLayoutSidebarButtonProps[] = [
  {
    label: "Home",
    icon: <AppIcons.home />,
    href: __paths.home,
  },
  {
    label: "Explore",
    icon: <AppIcons.explore />,
    href: __paths.explore,
  },
  {
    label: "Wardrobe",
    icon: <AppIcons.wardrobe />,
    href: __paths.wardrobe,
  },
  {
    label: "Community",
    icon: <AppIcons.community />,
    href: __paths.community,
  },
  {
    label: "Profile",
    icon: <FaCircleUser />,
    href: __paths.user,
  },
];
