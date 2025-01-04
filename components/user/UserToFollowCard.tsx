"use client";

import StepperDots from "@/components/micro/StepperDots";
import { __paths } from "@/utils";
import Link from "next/link";


import React, { useState } from "react";

interface User {
  name: string;
  username: string;
  image: string;
}

const users: User[] = [
  { name: "Qlodin", username: "@driptag", image: "/images/qlodin-logo.png" },
  { name: "John", username: "@driptag", image: "/images/person.png" },
  { name: "Jane", username: "@driptag", image: "/images/person.png" },
  { name: "Jane", username: "@driptag", image: "/images/person.png" },
  { name: "Jane", username: "@driptag", image: "/images/person.png" },
];

export default function UserToFollow() {

    
    
  return (
    <section>
    <div className="max-w-sm mx-auto ">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-3 flex items-center justify-between cursor-pointer hover:bg-gray-200"
        >
          <div className="flex items-center">
            <img
              className="rounded-full h-10 w-10"
              src={user.image}
              alt={user.name}
            />
            <div className="ml-2 flex flex-col">
              <div className="leading-snug text-sm text-gray-900 font-bold">
                {user.name}
              </div>
              <div className="leading-snug text-xs text-gray-600">
                {user.username}
              </div>
            </div>
          </div>
          <button className="h-8 px-3 text-md  text-white border border-white  rounded-md bg-black">
            Follow
          </button>
        </div>
      ))}
    </div>
            {/* Next Button */}
            <div className="mt-6 text-center">
          <Link
           className="btn-form"
            href={__paths.onboardingComplete}
          >
            Next
          </Link>
        </div>
        <div className="mt-6 font-bold text-center">
      
         Skip
        </div>

        {/* Stepper Dots */}
        <StepperDots totalDots={3} activeDot={1} />
    </section>
  );
}

