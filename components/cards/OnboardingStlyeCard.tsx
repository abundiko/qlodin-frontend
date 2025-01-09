import React from "react";

const OnboardingStlyeCard = (card: any) => {
  return (
    <div>
      <img
        className="relative rounded-lg shadow-md overflow-hidden aspect-square w-full object-cover"
        src={card.imgSrc}
        alt={card.title}
      />
      <div className="flex items-center justify-center ">
        <h4 className="max-md:text-sm font-medium text-gray-800">
          {card.title}
        </h4>
      </div>
    </div>
  );
};

export default OnboardingStlyeCard;
