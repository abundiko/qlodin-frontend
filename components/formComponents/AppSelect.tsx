"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AppInputProps } from "./AppInput";
import { ReactNode } from "react";

export type AppSelectOption = {
  title: ReactNode;
  value: string;
};

export type AppSelectProps = AppInputProps & {
  options: (string | AppSelectOption)[];
  variant?: "app-select" | "app-select-underline";
};

export default function AppSelect({
  name,
  title,
  options,
  value,
  readonly,
  onChange,
  error: fieldError,
  variant: _variant,
  placeholder = "-- select --",
}: AppSelectProps) {
  const variant = _variant ?? "app-select"
  return (
    <div>
      {title && (
        <label
          htmlFor={`${title}-select`}
          className="inline-block pb-1 text-black-300 font-switzer [&_option]:font-quicksand text-base"
        >
          {title}
        </label>
      )}
      <Select
        onValueChange={(val) => onChange?.(val)}
        disabled={readonly}
        defaultValue={value}
        name={name}
      >
        <SelectTrigger className={variant}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((item, index) => {
              if (typeof item === "string")
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              else
                return (
                  <SelectItem key={index} value={item.value}>
                    {item.title}
                  </SelectItem>
                );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      {fieldError && fieldError.length > 0 && (
        <p className="text-red-900 text-xs">{fieldError[0]}</p>
      )}
    </div>
  );
}
