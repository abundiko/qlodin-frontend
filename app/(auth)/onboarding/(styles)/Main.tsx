"use client";

import OnboardingStlye from "@/components/cards/OnboardingStlye";
import StepperDots from "@/components/micro/StepperDots";
import { __paths } from "@/utils";
// TODO: Implement the onboarding styles you resonate with page
// in components/cards folder, create the OnboardingStyle component; this component will be used to display the styles
// next button should go to __paths.onboardingPeopleToFollow


import Link from "next/link";

export default function Main() {
  return (
    <div className=" ">
      {/* Scrolling Content */}
      <div className="">
        <OnboardingStlye />
      </div>

    
        {/* Next Button */}
        <div className="text-center p-4 bg-white ">
          <Link className="btn-form" href={__paths.onboardingPeopleToFollow}>
            Next
          </Link>
        </div>

        {/* Stepper Dots */}
        <StepperDots totalDots={3} activeDot={0} />
      
    </div>
  );
}

