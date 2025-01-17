import React from "react";
import { ChatType } from "@/types/chat";
import { UserAvatar } from "../user";

type Props = {
  chat: ChatType;
};

export default function ChatListTile({ chat }: Props) {
  return (
    <div className="flex  py-2 gap-4">
      {/* Profile Image */}
      <UserAvatar
        className="h-full w-full object-cover avatar"
        src={chat.imageUrl}
        alt="Profile"
        fallbackLabel="?"
        height={40}
        width={40}
      />

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {/* Name and Time */}
        <div className="flex justify-between  items-center">
          <p className="font-medium text-gray-900">{chat.name}</p>
          <span className="text-sm text-black">{chat.time}</span>
        </div>
        {/* Message and Count */}
        <div className="flex justify-between items-center">
          <p className="text-gray-700 line-clamp-2 text-xs">{chat.message}</p>
          <span className="flex flex-shrink-0 items-center justify-center text-[0.6em] h-4 w-4 bg-black text-white rounded-full">
            {chat.messageCount}
          </span>
        </div>
      </div>
    </div>
  );
}
