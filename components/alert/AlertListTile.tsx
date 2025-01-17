
import React from "react";
import { AlertType } from "@/types/alert";

type Props = {
  alert: AlertType;
};


export default function AlertListTile({ alert }: Props) {
  return (

    <div className="">
    <div className="  flex  p-4 ">
      {/* Profile Image */}
      <div className="h-16 w-16 bg-[#514D56]  rounded-full overflow-hidden flex-shrink-0">
        <img
          className="  w-full h-full object-cover"
          src={alert.imageUrl}
          alt="Profile"
        />
      </div>
  
      {/* Content Section */}
      <div className="flex flex-col flex-grow ml-4">
        {/* Name and Time */}
        <div className="flex justify-between  items-center">
          <p className="font-semibold text-gray-900 truncate  ">{alert.name}</p>
          <span className="text-sm text-black">{alert.time}</span>
        </div>
        {/* Message and Count */}
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-700 truncate">{alert.message}</p>
    
        </div>
      </div>
    </div>
  </div>
  

   
    
  );
};

