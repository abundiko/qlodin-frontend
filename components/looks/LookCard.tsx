import { LooksTypePopulated } from "@/types/looks";
import Link from "next/link";
import { IoChatbubble, IoHeartSharp } from "react-icons/io5";
import { AppIcons } from "../icons/AppIcons";

type LookCardProps = {
  look: LooksTypePopulated;
};

function LookCard({ look }: LookCardProps) {
  return (
    <div className="w-full aspect-[122/163] md:aspect-[252/312] border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <img
        className="rounded-lg overflow-hidden object-cover w-full h-full"
        src={look.image}
        alt="Look image"
      />
      {/* Overlay */}
      <Link
        href={"#"}
        className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 to-transparent hover:from-transparent transition-all duration-300"
      >
        <div className="flex items-center justify-center gap-1 sm:gap-3 md:gap-6 p-1 rounded text-white w-11/12">
          <span className="flex items-center space-x-1 text-xs md:text-base">
            <IoHeartSharp className="" />
            <span>{look.likesCount}</span>
          </span>
          <span className="flex items-center space-x-1 text-xs md:text-base">
            <AppIcons.wardrobeSm />
            <span>{look.wardrobeCount}</span>
          </span>
          <span className="flex items-center space-x-1 text-xs md:text-base">
            <IoChatbubble className="" />
            <span>{look.commentsCount}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
export default LookCard;
