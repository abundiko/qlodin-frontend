import { cn } from "@/lib/utils";
import { MainLayoutResponsiveWrapper } from "../mainLayout";
import { AppIcons } from "../icons/AppIcons";
import UserProfileBadge from "./UserProfileBadge";

export default function UserProfileView() {
  return (
    <MainLayoutResponsiveWrapper className="py-6 md:p-10 flex gap-4 md:gap-8">
      <div className="w-7/12 flex flex-col gap-4 flex-shrink-0 justify-center">
        <div className="flex justify-between flex-wrap gap-x-6 max-md:hidden">
          <h2 className="line-clamp-1 font-semibold md:text-2xl">
            Awolowo Samuel
          </h2>
          <p className="line-clamp-1 font-medium text-sm md:text-base text-neutral-600">
            @the_best_001
          </p>
        </div>
        <div className="flex justify-between gap-4 h-fit">
          <p className="text-sm md:text-lg inline-flex max-lg:flex-col h-fit max-lg:justify-center lg:gap-2 text-center">
            <span className="font-semibold">30</span>
            <span>Looks</span>
          </p>
          <p className="text-sm md:text-lg inline-flex max-lg:flex-col h-fit max-lg:justify-center lg:gap-2 text-center">
            <span className="font-semibold">30</span>
            <span>Followers</span>
          </p>
          <p className="text-sm md:text-lg inline-flex max-lg:flex-col h-fit max-lg:justify-center lg:gap-2 text-center">
            <span className="font-semibold">30</span>
            <span>Following</span>
          </p>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="grid grid-cols-2 gap-2 md:gap-4 flex-grow">
            <button className={cn("btn-black max-h-10", "!py-1")}>
              Follow
            </button>
            <button className={cn("btn-dark-50 max-h-10", "!py-1")}>
              Message
            </button>
          </div>
          <button className="max-md:hidden flex-shrink-0">
            <AppIcons.ellipsis />
          </button>
        </div>
        <p className="text-sm md:text-base line-clamp-4 text-neutral-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eos
          quaerat repudiandae cum qui optio aperiam id ut sunt quo?
        </p>
      </div>
      <div className="w-5/12 flex-shrink-0 flex flex-col justify-center overflow-hidden">
        <div className="flex justify-end scale-[.8]">
          <button className="md:hidden">
            <AppIcons.ellipsis />
          </button>
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
