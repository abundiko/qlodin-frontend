"use client";

import { cn } from "@/lib/utils";
import { MainLayoutResponsiveWrapper } from "../mainLayout";
import { AppIcons } from "../icons/AppIcons";
import UserProfileBadge from "./UserProfileBadge";
import Link from "next/link";
import { __paths } from "@/utils";
import { useUserStore } from "@/stores";
import { fullName } from "@/functions/helpers";

export default function MyProfileView() {
  const user = useUserStore((s) => s.user);

  return (
    <MainLayoutResponsiveWrapper className="py-6 md:p-10 flex gap-4 md:gap-8">
      <div className="w-7/12 lg:w-8/12 flex flex-col gap-4 flex-shrink-0 justify-center">
        <div className="flex justify-between flex-wrap gap-x-6 max-md:hidden">
          <h2 className="line-clamp-1 font-semibold md:text-lg">
            {fullName(user?.firstName, user?.lastName)}
          </h2>
          <p className="line-clamp-1 font-medium text-sm md:text-base text-neutral-600">
            @{user?.userName}
          </p>
        </div>
        <div className="flex justify-between gap-4 h-fit">
          <Link
            href={__paths.userLooks()}
            className="text-sm md:text-base inline-flex max-lg:flex-col h-fit max-lg:justify-center lg:gap-1 text-center"
          >
            <span className="font-semibold">30</span>
            <span>Looks</span>
          </Link>
          <Link
            href={__paths.userFollowers()}
            className="text-sm md:text-base inline-flex max-lg:flex-col h-fit max-lg:justify-center lg:gap-1 text-center"
          >
            <span className="font-semibold">30</span>
            <span>Followers</span>
          </Link>
          <Link
            href={__paths.userFollowing()}
            className="text-sm md:text-base inline-flex max-lg:flex-col h-fit max-lg:justify-center lg:gap-1 text-center"
          >
            <span className="font-semibold">30</span>
            <span>Following</span>
          </Link>
        </div>
        <div className="flex gap-2">
          <button className={cn("btn-black max-h-10", "!py-1")}>
            Edit Profile
          </button>
          <Link href={__paths.userSettings} className="max-md:hidden text-3xl">
            <AppIcons.settings />
          </Link>
        </div>
        <p className="text-sm md:text-base line-clamp-4 text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eos
          quaerat repudiandae cum qui optio aperiam id ut sunt quo?
        </p>
      </div>
      <div className="w-5/12 lg:w-4/12 flex-shrink-0 flex flex-col justify-center overflow-hidden">
        <div className="flex justify-end scale-[.8]">
          <Link href={__paths.userSettings} className="md:hidden">
            <AppIcons.settings className="text-3xl" />
          </Link>
        </div>
        <UserProfileBadge src="/images/person.png" />
        <div className="flex flex-col items-center md:hidden">
          <h2 className="line-clamp-1 font-semibold text-sm">Awolowo Samuel</h2>
          <p className="line-clamp-1 font-medium text-xs md:text-base text-neutral-600">
            @the_best_001
          </p>
        </div>
      </div>
    </MainLayoutResponsiveWrapper>
  );
}
