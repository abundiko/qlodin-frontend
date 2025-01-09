import { OnboardingStlyeCard } from "@/components/cards";
import StepperDots from "@/components/micro/StepperDots";
import { __paths } from "@/utils";
import Link from "next/link";

const cardsData = [
  {
    imgSrc: "/images/style-2.png",
    title: "Street Wears",
  },
  {
    imgSrc: "/images/style-1.png",
    title: "Buisness Wears",
  },
  {
    imgSrc: "/images/style-2.png",
    title: "Street Wears",
  },
  {
    imgSrc: "/images/style-2.png",
    title: "Street Wears",
  },
];

export default function Main() {
  return (
    <div>
      {/* Scrolling Content */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2   ">
        {cardsData.map((card, index) => (
          <OnboardingStlyeCard key={index} {...card} />
        ))}
      </div>

      {/* Next Button */}
      <div className="text-center p-4 bg-white ">
        <Link
          className="btn-black max-w-[362px]"
          href={__paths.onboardingPeopleToFollow}
        >
          Next
        </Link>
      </div>

      {/* Stepper Dots */}
      <StepperDots totalDots={3} activeDot={0} />
    </div>
  );
}
