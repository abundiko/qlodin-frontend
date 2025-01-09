"use client"

import React from "react";

interface DotsProps {
  totalDots: number; // Total steps
  activeDot: number; // Current step (starts at 0)
  onDotClick?: (index: number) => void; // Function to handle dot clicks
}

const StepperDots: React.FC<DotsProps> = ({ totalDots, activeDot, onDotClick }) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === activeDot ? "bg-black" : "bg-gray-300"
          } transition-colors duration-300 cursor-pointer`}
          onClick={() => onDotClick && onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default StepperDots;
