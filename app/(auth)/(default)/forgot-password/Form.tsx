"use client";

import { forgotpasswordActions } from "@/actions/auth/forgotpassword";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";

import { useActionState, useEffect, useRef, useState } from "react";

import { __paths } from "@/utils";
import { LuMail } from "react-icons/lu";
import PinField from "react-pin-field";

const Form = () => {
  const [stage, setStage] = useState<"email" | "code" | "password">("email");
  const [code, setCode] = useState("");
  const [token, setToken] = useState<string | undefined>(undefined);
  const pinputRef = useRef<HTMLInputElement[]>(null);
  const [state, _action, isPending] = useActionState(forgotpasswordActions, {});

  useEffect(() => {
    if (state.success && stage === "email") setStage("code");
    if (state.success && stage === "code") {
      setToken(state.data.token);
      setStage("password");
    }
  }, [state]);

  async function action(formData: FormData) {
    if (code) formData.append("resetCode", code);
    if (token) formData.append("token", token);
    return _action(formData);
  }

  return (
    <form action={action}>
      <div className="flex items-stretch mb-6 gap-4 flex-col">
        <FormMessage res={state} />
        {fields.map((field, index) => (
          <AppInput
            {...field}
            key={index}
            error={state?.fieldErrors?.[field.name]}
            readonly={stage !== "email"}
          />
        ))}
        {stage === "code" && (
          <div className="flex flex-col items-center">
            <label>Enter verification code</label>
            <div className="flex justify-center items-center gap-2">
              <PinField
                ref={pinputRef}
                length={6}
                validate={/^[0-9]$/}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                onChange={setCode}
              />
            </div>
          </div>
        )}
        {stage === "password" &&
          passWordFields.map((field, index) => (
            <AppInput
              {...field}
              key={index}
              error={state?.fieldErrors?.[field.name]}
            />
          ))}
      </div>
      <FormButton
        disabled={stage === "code" && code.length < 6}
        loading={isPending}
        className="btn-form"
      >
        Continue
      </FormButton>
    </form>
  );
};

export default Form;

const fields: AppInputProps[] = [
  {
    title: "Email",
    type: "email",
    placeholder: "Email Address",
    name: "email",
    icon: <LuMail />,
  },
];

const passWordFields: AppInputProps[] = [
  {
    title: "Password",
    type: "password",
    placeholder: "New Password",
    name: "password",
    icon: <LuMail />,
  },
  {
    type: "password",
    placeholder: "Confirm New Password",
    name: "confirmPassword",
    icon: <LuMail />,
  },
];
