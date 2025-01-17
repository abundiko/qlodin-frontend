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
  const setExpanded = useGlobalStore((s) => s.setMainSidebarOpen);
  const { width: vw } = useWindowSize();

  if (vw >= 768)
    return (
      <AnimatePresence mode="popLayout">
        <aside
          key={"main-layout-aside"}
          className={`border-r lg:p-4 transition-all duration-300 flex-shrink-0 max-md:hidden sticky top-0 h-screen 
    ${
      isExpanded
        ? "w-[clamp(180px,_30vw,_250px)]"
        : "w-[clamp(100px,_15vw,_140px)]"
    }
  `}
        >
          <div className="flex justify-center h-full flex-col gap-4 p-4">
            <div className="flex flex-col items-center justify-center mt-[5vh] mb-[2vh]">
              <AppLogo size={42} />
              <h1 className="text-[#1E1E1E] text-xl md:text-3xl font-medium font-playfair">
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
                    height={44}
                    width={44}
                    className="overflow-hidden border-white"
                    fallbackLabel="A"
                  />
                }
              />
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
