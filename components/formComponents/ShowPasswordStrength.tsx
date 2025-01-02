import { cn } from "@/lib/utils";
import React from "react";
import { __validators } from "@/utils";

const ShowPasswordStrength = ({ password }: { password: string }) => {
  const parse =
    __validators.password.safeParse(password).error?.flatten().formErrors
      .length ?? 0;
  const strength = 4 - parse;

  return (
    <div className="flex gap-3">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-1.5 w-1/4 rounded-md transition-all duration-300 bg-neutral-400 ",
            {
              " bg-red-700": strength <= 2 && index <= strength,
              " bg-yellow-600": strength === 3 && index < 3,
              " bg-green-600": strength === 4,
              // " hidden": index >= strength,
            }
          )}
        />
      ))}
    </div>
  );
};

export default ShowPasswordStrength;
