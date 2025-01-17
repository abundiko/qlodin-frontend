import React from "react";
import { AlertType } from "@/types/alert";

type Props = {
  alert: AlertType;
};

export default function AlertListTile({ alert }: Props) {
  return (
    <div className="flex py-1 gap-4">
      {/* Profile Image */}
      <div className="h-8 w-8 p-2 bg-[#514D56]  rounded-full overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={alert.imageUrl}
          alt="Profile"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {/* Name and Time */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-gray-900 line-clamp-1">
            {alert.name}
          </p>
          <span className="text-sm text-black flex-shrink-0">{alert.time}</span>
        </div>
          <p className="text-gray-700 line-clamp-2 text-sm">{alert.message}</p>
      </div>
    </div>
  );
}
