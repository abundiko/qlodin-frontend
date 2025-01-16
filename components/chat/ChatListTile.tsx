
import React from "react";
import { ChatType } from "@/types/chat";

type Props = {
  chat: ChatType;
};


export default function ChatListTile({ chat }: Props) {
  return (

    <div className="">
    <div className="  flex  p-4 ">
      {/* Profile Image */}
      <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
        <img
          className="h-full w-full object-cover"
          src={chat.imageUrl}
          alt="Profile"
        />
      </div>
  
      {/* Content Section */}
      <div className="flex flex-col flex-grow ml-4">
        {/* Name and Time */}
        <div className="flex justify-between  items-center">
          <p className="text-lg font-semibold text-gray-900">{chat.name}</p>
          <span className="text-sm text-black">{chat.time}</span>
        </div>
        {/* Message and Count */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-700 truncate">{chat.message}</p>
          <span className="flex items-center justify-center text-xs h-6 w-6 bg-black text-white rounded-full">
  {chat.messageCount}
</span>
        </div>
      </div>
    </div>
  </div>
  

   
    
  );
};

