'use client'

import { countries } from "country-codes-flags-phone-codes";
import { HTMLAttributes, useEffect, useState } from "react";
import AppSelect from "./AppSelect";
import { COUNTRY_FLAGS_API } from "@/constants";

export type PhoneNumberWithCodeInputProps = HTMLAttributes<HTMLInputElement> & {
  onChangeText?: (value: string) => void;
  codeValue?: string;
  error?: string;
};

export function PhoneNumberWithCodeInput({
  onChangeText,
  defaultValue,
  codeValue,
  error,
  ...props
}: PhoneNumberWithCodeInputProps) {
  const [value, setValue] = useState<string>(
    codeValue || countries[0].dialCode
  );
  const [phone, setPhone] = useState<string>(
    defaultValue ? `${defaultValue}`.replace(value, "") : ""
  );

  const [countriesWithCodes] = useState(() => {
    return Array.from(
      countries
        .map((country) => ({
          title: (
            <div className="flex gap-1">
              <img
                src={`${COUNTRY_FLAGS_API}/1x1/${country.code.toLowerCase()}.svg`}
                className="h-4 object-contain"
              />
              <span>{country.dialCode}</span>
            </div>
          ),
          value: country.dialCode,
        }))
        .filter(
          (obj, index, self) =>
            index === self.findIndex((o) => o.value === obj.value)
        )
        .sort((a, b) => a.value.localeCompare(b.value))
    );
  });

  useEffect(() => {
    onChangeText?.(`${value} ${phone}`);
  }, [value, onChangeText, phone]);

  return (
    <div>
      <label className="inline-block pb-1 text-black-300 font-inter text-sm">
        Phone number
      </label>
      <div className="flex space-x-2">
        <div className="w-36">
          <AppSelect
            name="countryCode"
            onChange={setValue}
            value={value}
            options={countriesWithCodes}
          />
        </div>
        <input
          {...props}
          type="number"
          name="mobileNumber"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          placeholder="Mobile number"
          min={1}
          className="app-input ps-3"
        />
      </div>
      {error && <p className="text-red-900 text-xs">{error}</p>}
    </div>
  );
}
