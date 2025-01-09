"use client";

import StepperDots from "@/components/micro/StepperDots";
import { UserToFollowCard } from "@/components/user";
import { __paths } from "@/utils";
import Link from "next/link";

const users = [
  { name: "Qlodin", username: "@driptag", image: "/images/qlodin-logo.png" },
  { name: "John", username: "@driptag", image: "/images/person.png" },
  { name: "Jane", username: "@driptag", image: "/images/person.png" },
  { name: "Jane", username: "@driptag", image: "/images/person.png" },
  { name: "Jane", username: "@driptag", image: "/images/person.png" },
];

export default function Main() {
  return (
    <section>
      <div className="max-w-sm mx-auto bg-[#F7F7F7] rounded-2xl overflow-y-auto ">
        {users.map((user, index) => (
          <UserToFollowCard key={index} {...user} />
        ))}
      </div>

      {/* Next/Skip Buttons */}
      <div className="max-w-[362px] grid grid-cols-2 mx-auto gap-2 mt-4">
        <Link
          href={__paths.onboardingComplete}
          className="btn-neutral !text-black"
        >
          Skip
        </Link>
        <Link className="btn-black" href={__paths.onboardingComplete}>
          Next
        </Link>
      </div>

      {/* Stepper Dots */}
      <StepperDots totalDots={3} activeDot={1} />
    </section>
  );
}
