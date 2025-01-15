

// TODO
// create a component: @/components/looks/LookCard
// that component should use props {look:LookTypePopulated}
// import dummyLooks from "@/types/looks"; and map it with the LookCard
// follow the UI designs very well
// look for the icons here: https://react-icons.github.io/react-icons/search 
// (any Icon in the design not found should be added to components/icons/AppIcons)

import LookCard from "@/components/looks/LookCard";

const looksData = [
  {
    id: "1",
    image: "/images/look-img.jpeg",
    likes: 123,
    views: 456,
    comments: 78,
  },
  {
    id: "2",
    image: "/images/look-img.jpeg",
    likes: 98,
    views: 200,
    comments: 40,
  },
  {
    id: "3",
    image: "/images/look-img.jpeg",
    likes: 250,
    views: 500,
    comments: 100,
  },

    {
    id: "4",
    image: "/images/look-img.jpeg",
    likes: 250,
    views: 500,
    comments: 100,
  },
  // You can add more looks as needed
];


export default function Page() {
  return <div  className="grid sm:grid-cols-3 gap-2 p-4" >
   
   
      {looksData.map((look) => (
        <div className="flex justify-center">
          <LookCard key={look.id} look={look} />
        </div>
      ))}
  
    
    </div>;
}
