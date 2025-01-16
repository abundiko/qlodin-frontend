

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
  return <div  className="grid sm:grid-cols-3 gap-2 p-4" >
   
   
      {dummyLooks.map((look) => (
        <div className="flex justify-center">
          <LookCard key={look._id} look={look} />
        </div>
      ))}
  
    
    </div>;
}
