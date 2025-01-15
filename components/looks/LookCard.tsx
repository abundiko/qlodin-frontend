import Link from 'next/link';
import React from 'react';
import { FaComment } from 'react-icons/fa6';
import { IoHeartSharp, IoPlaySharp } from "react-icons/io5";
type LookTypePopulated = {
  id: string;
  image: string;
  likes: number;
  views: number;
  comments: number;

  
};

type Props = {
  look: LookTypePopulated;
};

export default function lookCard({ look }: Props) {
  return (
    <div className="w-full h-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
      <Link href="#">
        <img
          className="w-full rounded-lg "
          src={look.image}
          alt="Look image"
        />
      </Link>
      {/* Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-3">
        <div className="flex items-center justify-between  px-6 py-2 rounded text-white w-11/12">
          <span className="flex items-center space-x-1">
            <IoHeartSharp className="w-5 h-5" />
            <span>{look.likes}</span>
          </span>
          <span className="flex items-center space-x-1">
          <IoPlaySharp className="w-5 h-5" />
            <span>{look.views}</span>
          </span>
          <span className="flex items-center space-x-1">
            <FaComment  className="w-5 h-5" />
            <span>{look.comments}</span>
          </span>
        </div>
      </div>
    </div>
    
  );
}
