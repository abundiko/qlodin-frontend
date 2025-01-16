import { LooksType, LooksTypePopulated } from '@/types/looks';
import Link from 'next/link';
import React, { JSX } from 'react';
import { FaComment } from 'react-icons/fa6';
import { IoHeartSharp, IoPlaySharp } from "react-icons/io5";
;

type Props = {
  look: LooksTypePopulated;
};





 function LookCard({ look }: Props ) {
  return (
    <div className="w-full h-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link href="#">
        <img
          className="aspect-[3/4] sm:aspect-[4/5] lg:aspect-[2/3]  rounded-lg overflow-hidden object-cover w-full h-full"
          src={look.image}
          alt="Look image"
        />
      </Link>
      {/* Overlay */}
      <div className="absolute inset-0 flex items-end justify-center ">
        <div className="flex items-center justify-between  px-6 py-2 rounded text-white w-11/12">
          <span className="flex items-center space-x-1">
            <IoHeartSharp className="w-5 h-5" />
            <span>{look.likesCount}</span>
          </span>
          <span className="flex items-center space-x-1">
          <IoPlaySharp className="w-5 h-5" />
            <span>{look.wardrobeCount}</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaComment  className="w-5 h-5" />
            <span>{look.commentsCount}</span>
          </span>
        </div>
      </div>
    </div>
    
  );
}
export default LookCard
