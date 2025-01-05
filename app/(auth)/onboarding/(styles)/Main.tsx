"use client";

import StepperDots from "@/components/micro/StepperDots";
// TODO: Implement the onboarding styles you resonate with page
// in components/cards folder, create the OnboardingStyle component; this component will be used to display the styles
// next button should go to __paths.onboardingPeopleToFollow

import { __paths } from "@/utils";
import Link from "next/link";


export default function Main() {
  // Static data for images and text
  const styles = [
    { name: "Street Wears", image: "/images/style-2.png" },
    { name: "Business Casual", image: "/images/style-1.png" }, // i dont know what is wrong here exaclty Add L in that Casua and look at the code
    { name: "Street wears", image: "/images/style-2.png" },
    { name: "Street wears", image: "/images/style-2.png" },
    { name: "Street wears", image: "/images/style-2.png" },
    { name: "Street wears", image: "/images/style-2.png" },
 
  ];


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-10 sm:max-w-xl 
        sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Display static images */}
          {styles.map((style, index) => (
            // do not map a div here, the instructions atop specify what component this should be
            <div key={index} className="flex flex-col items-center">
              <img
                alt={style.name}
                src={style.image}
                // remove max width from these images, let them expand and look like the figma design
                className="h-full w-full max-w-[120px] sm:max-w-[180px] lg:max-w-[240px] rounded object-cover"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">{style.name}</p>
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

        {/* Stepper Dots */}
        <StepperDots totalDots={3} activeDot={0} />
      </div>
    </div>
  );
}
