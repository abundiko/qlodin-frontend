import { useState } from "react";
import { useRouter } from "next/router";
import StepperDots from "@/components/micro/StepperDots";
import { __paths } from "@/utils";

export default function OnboardingWrapper() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const steps = [
    { path: __paths.onboarding, totalDots: 3 },
    {path: __paths.onboardingPeopleToFollow, totalDots:3},
    { path: __paths.onboardingComplete, totalDots: 3 },

  ];

  const goToStep = (stepIndex: number) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex);
      router.push(steps[stepIndex].path);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <StepperDots
        totalDots={steps[currentStep].totalDots}
        activeDot={currentStep}
        onDotClick={goToStep} // Navigate between pages
      />
    </div>
  );
}
