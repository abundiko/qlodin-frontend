"use client";

import { updateEmailAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  InputStatusCheckerIcon,
} from "@/components/formComponents";
import { debugLog } from "@/functions/debug";
import { useAppActionState, useEmailChecker } from "@/hooks";
import { useUserStore } from "@/stores";
import { useRef, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import PinField from "react-pin-field";
import { useEffectOnce } from "react-use";

export default function EditDriptagForm() {
  const [stage, setState] = useState<"email" | "verify">("email");
  const [code, setCode] = useState("");
  const pinputRef = useRef<HTMLInputElement[]>(null);
  const { user, setUser } = useUserStore();
  const { status, email, setEmail, emailError } = useEmailChecker();
  useEffectOnce(() => {
    setEmail(user?.email ?? "");
  });
  const { action, state, submitting } = useAppActionState(updateEmailAction, {
    moreFields: { otp: code.length > 0 ? code : undefined },
    onSuccess(res) {
      if (res.data.next === "verify") setState("verify");
      if (res.data.next === "email") setState("email");
      if (res.data.user) setUser(res.data.user);
    },
    onResponse(r) {
      debugLog({ r });
      if (!pinputRef.current) return;
      pinputRef.current.forEach((input, index) => {
        input.value = code[index] || "";
      });
    },
  });

  return (
    <form action={action} className="flex flex-col gap-4">
      <FormMessage res={state} />
      {formFields.map((field) => (
        <AppInput
          readonly={stage !== "email"}
          variant="app-input-white-bordered"
          key={field.name}
          {...field}
          error={(() => {
            const stateError = [emailError].filter(
              (i) => typeof i === "string"
            );
            return stateError.length > 0
              ? stateError
              : state?.fieldErrors?.[field.name];
          })()}
          onChange={setEmail}
          value={email}
          rightComponent={<InputStatusCheckerIcon status={status} />}
        />
      ))}
      {stage === "verify" && (
        <div className="flex flex-col gap-1 justify-start">
          <label>Verification Code</label>
          <div className="flex justify-between items-center gap-2">
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
      <FormButton
        disabled={status !== "success"}
        loading={submitting}
        className="btn-form !py-1.5 !w-fit !px-6 mx-auto"
      >
        {stage === "email" ? "Continue" : "Verify & Save"}
      </FormButton>
    </form>
  );
}

const formFields: AppInputProps[] = [
  {
    name: "email",
    placeholder: "enter your email",
    title: "Email address",
    icon: <FaRegEnvelope />,
  },
];
