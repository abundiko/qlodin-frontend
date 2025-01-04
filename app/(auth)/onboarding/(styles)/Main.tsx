"use client";

// TODO: Implement the onboarding styles you resonate with page
// in components/cards folder, create the OnboardingStyle component; this component will be used to display the styles
// next button should go to __paths.onboardingPeopleToFollow

import { __paths } from "@/utils";
import Link from "next/link";
import { useState } from "react";

export default function Main() {
  // Static data for images and text
  const styles = [
    { name: "Style 1", image: "/images/person.png" },
    { name: "Style 2", image: "/images/person.png" },
    { name: "Style 3", image: "/images/person.png" },
    { name: "Style 4", image: "/images/person.png" },
    { name: "Style 5", image: "/images/person.png" },
    { name: "Style 6", image: "/images/person.png" },
  ];

  // State to track the current step
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 3; // Number of steps (dots)

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-10 sm:max-w-xl 
        sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Display static images */}
          {styles.map((style, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                alt={style.name}
                src={style.image}
                className="h-auto w-full max-w-[120px] sm:max-w-[180px] lg:max-w-[240px] rounded object-cover"
              />
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="mt-6 text-center">
          <Link
           className="btn-form"
            href={__paths.onboardingPeopleToFollow}
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
                activeStep === index + 1 ? "bg-black" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
