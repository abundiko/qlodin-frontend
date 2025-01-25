"use client";

import { __paths } from "@/utils";
import { AppIcons } from "../icons/AppIcons";
import TabButton, { TabButtonProps } from "../ui/TabButton";

export default function UserProfileTabs({
  prefix = __paths.user,
}: {
  prefix?: string;
}) {
  const tabs: TabButtonProps[] = [
    {
      href: __paths.userLooks(prefix),
      icon: <AppIcons.looks />,
      label: "Looks",
      active: "exact-href",
    },
    {
      href: __paths.userCollections(prefix),
      icon: <AppIcons.collections />,
      label: "Collections",
      active: "exact-href",
    },
    {
      href: __paths.userCatalogue(prefix),
      icon: <AppIcons.catalogue />,
      label: "Catalogue",
      active: "exact-href",
    },
  ];

  return (
    <div className="flex gap-2 md:gap-4 items-center">
      {tabs.map((tab, i) => (
        <TabButton key={i} {...tab} className="flex-row-reverse" />
      ))}
    </div>
  );
}
