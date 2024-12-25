import { countries } from "country-codes-flags-phone-codes";
import { HTMLAttributes, useEffect, useState } from "react";
import AppSelect from "./AppSelect";

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
      new Set(countries.map((country) => country.dialCode))
    ).sort();
  });

  useEffect(() => {
    onChangeText?.(`${value} ${phone}`);
  }, [value, onChangeText, phone]);

  return (
    <div>
      <div className="flex space-x-2">
        <AppSelect
          name="countryCode"
          onChange={setValue}
          value={value}
          options={countriesWithCodes}
        />
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
      {error && <p className="text-red-500 text-[10px]">{error}</p>}
    </div>
  );
}
