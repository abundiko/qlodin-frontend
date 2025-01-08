import React from "react";

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

const App = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2   ">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className=" "
        >
          <div className="relative  rounded-lg shadow-md overflow-hidden">
            <img
              className="w-full object-cover"
              src={card.imgSrc}
              alt={card.title}
            />
          </div>
          <div className="flex items-center justify-center ">
  <h2 className="text-lg font-medium text-gray-800">{card.title}</h2>
</div>
        </div>
      ))}
    </div>
  );
};

export default App;
