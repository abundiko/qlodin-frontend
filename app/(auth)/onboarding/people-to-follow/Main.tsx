"use client";

import { __paths } from "@/utils";
import Link from "next/link";
// TODO: Implement the onboarding people to follow page
// in components/user folder, create the UserToFollowCard component; this component will be used to display the users to follow
// next button should go to __paths.onboardingComplete

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

export default function Main() {

    // State to track the current step
    const [activeStep, setActiveStep] = useState(2);
    const totalSteps = 3; // Number of steps (dots)
    
  return (
    <section>
    <div className="max-w-sm mx-auto ">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200"
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
          <button className="h-8 px-3 text-md font-bold text-white border border-white rounded-full bg-black">
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

        {/* Transition Dots */}
        <div className="mt-4 p-5 flex justify-center items-center space-x-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${
                activeStep === index + 2 ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
    </section>
  );
}

