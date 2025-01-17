import { LooksTypePopulated } from "@/types/looks";
import Link from "next/link";
import { FaComment } from "react-icons/fa6";
import { IoHeartSharp } from "react-icons/io5";
import { TbHanger2Filled } from "react-icons/tb";

type LookCardProps = {
  look: LooksTypePopulated;
};

function LookCard({ look }: LookCardProps) {
  return (
    <div className="w-full aspect-[122/163] md:aspect-[252/392] border border-gray-200 rounded-lg overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <img
        className="rounded-lg overflow-hidden object-cover w-full h-full"
        src={look.image}
        alt="Look image"
      />
      {/* Overlay */}
      <Link
        href={"#"}
        className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/80 to-transparent hover:from-transparent transition-all duration-300"
      >
        <div className="flex items-center justify-center gap-3 md:gap-6 p-1 rounded text-white w-11/12">
          <span className="flex items-center space-x-1 text-sm md:text-base">
            <IoHeartSharp className="" />
            <span>{look.likesCount}</span>
          </span>
          <span className="flex items-center space-x-1 text-sm md:text-base">
            <TbHanger2Filled className="" />
            <span>{look.wardrobeCount}</span>
          </span>
          <span className="flex items-center space-x-1 text-sm md:text-base">
            <FaComment className="" />
            <span>{look.commentsCount}</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
export default LookCard;
