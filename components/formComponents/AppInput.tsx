"use client";

import { HTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { HiEyeOff } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";

export type AppInputProps = {
  icon?: React.ReactNode;
  rightComponent?: React.ReactNode;
  placeholder?: string;
  value?: string;
  name: string;
  type?: string;
  textarea?: boolean;
  readonly?: boolean;
  hidden?: boolean;
  ps?: string;
  title?: string;
  rows?: number;
  error?: string[];
  onChange?: (value: string) => void;
  inputProps?: HTMLAttributes<HTMLInputElement> & any;
  variant?: "app-input" | "app-input-white-bordered";
};

export default memo(function AppInput({
  icon,
  placeholder,
  value = "",
  name,
  type = "text",
  onChange,
  textarea = false,
  ps,
  title,
  readonly,
  hidden,
  rows,
  error,
  inputProps,
  rightComponent,
  variant = "app-input"
}: AppInputProps) {
  const [val, setVal] = useState(value);
  const [eyeOpen, setEyeOpen] = useState(false);
  const fieldError = error?.filter((i) => !!i);

  useEffect(() => {
    setVal(value);
  }, [value]);

  const [id] = useState(() => {
    return title ? title.replaceAll(" ", "-") + "-input" : undefined;
  });

  return (
    <div className={hidden ? "hidden" : ""}>
      {title && (
        <label
          htmlFor={id}
          className="inline-block pb-1 text-black-300 text-sm font-inter"
        >
          {title}
        </label>
      )}
      <div className="relative z-[1]">
        <span
          className={`absolute text-sm inline-block left-3 opacity-60 ${
            textarea ? "top-4" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {icon}
        </span>
        {type === "password" && (
          <button
            type="button"
            role="button"
            onClick={() => setEyeOpen(!eyeOpen)}
            className={`absolute inline-block text-neutral-600 right-3 ${
              textarea ? "top-4" : "top-1/2 -translate-y-1/2"
            }`}
          >
            {eyeOpen ? <HiEye /> : <HiEyeOff />}
          </button>
        )}
        {textarea ? (
          <textarea
            readOnly={readonly}
            hidden={hidden}
            id={id}
            name={name}
            placeholder={placeholder}
            rows={rows ?? 4}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              if (onChange) onChange(e.target.value);
            }}
            className={`${variant} ${!icon ? "ps-3" : "ps-9"} ${!(!!rightComponent || type === "password") ? "pe-3" : "!pe-9"}  ${
              fieldError ? "!bg-red-100" : ""
            }`}
          />
        ) : (
          <input
            {...inputProps}
            readOnly={readonly}
            hidden={hidden}
            id={id}
            name={name}
            placeholder={placeholder}
            type={!eyeOpen ? type : "text"}
            value={val}
            onChange={(e) => {
              setVal(e.target.value);
              if (onChange) onChange(e.target.value);
            }}
            className={`${variant} ${ps ? ps : !icon ? "ps-4" : "ps-9"}  ${!(!!rightComponent || type === "password") ? "pe-3" : "!pe-9"}  ${
              fieldError && fieldError.length > 0 ? "!bg-red-100" : ""
            }`}
          />
        )}
        {rightComponent && (
          <span
            className={`absolute text-sm inline-block right-3 opacity-60 ${
              textarea ? "top-4" : "top-1/2 -translate-y-1/2"
            }`}
          >
            {rightComponent}
          </span>
        )}
      </div>
      {fieldError && fieldError.length > 0 && (
        <p className="text-red-900 text-xs">{fieldError[0]}</p>
      )}
    </div>
  );
});
