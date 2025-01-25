// TODO
// create a component: @/components/looks/LookCard
// that component should use props {look:LookTypePopulated}
// import dummyLooks from "@/types/looks"; and map it with the LookCard
// follow the UI designs very well
// look for the icons here: https://react-icons.github.io/react-icons/search
// (any Icon in the design not found should be added to components/icons/AppIcons)

import LookCard from "@/components/looks/LookCard";
import { dummyLooks } from "@/types/looks";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-1 md:gap-2 mb-6">
        {dummyLooks.map((look) => (
          <LookCard key={look._id} look={look} />
        ))}
      </div>
    </>
  );
}
