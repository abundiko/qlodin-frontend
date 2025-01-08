"use client";

import { signUpAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  InputStatusCheckerIcon,
} from "@/components/formComponents";
import { LuLock, LuMail } from "react-icons/lu";
import { useActionState, useState } from "react";
import { useEmailChecker } from "@/hooks";
import SocialAuth from "./SocialAuth";
import ShowPasswordStrength from "@/components/formComponents/ShowPasswordStrength";

const SignupForm = () => {
  const [state, action] = useActionState(signUpAction, {});
  const { status, email, setEmail, emailError } = useEmailChecker();
  const [password, setPassword] = useState("");

  return (
    <>
      <form action={action}>
        <div className="flex items-stretch mb-6 gap-4 flex-col">
          <FormMessage res={state} />
          <AppInput
            {...fields[0]}
            error={(() => {
              const stateError = [emailError].filter(
                (i) => typeof i === "string"
              );
              return stateError.length > 0
                ? stateError
                : state?.fieldErrors?.[fields[0].name];
            })()}
            onChange={setEmail}
            value={email}
            rightComponent={<InputStatusCheckerIcon status={status} />}
          />
          <AppInput
            {...fields[1]}
            error={state?.fieldErrors?.[fields[1].name]}
            onChange={setPassword}
          />
          <ShowPasswordStrength password={password} />
        </div>
        <FormButton disabled={status !== "success"} className="btn-form">
          Next
        </FormButton>
      </form>
      <SocialAuth />
    </>
  );
};

export default SignupForm;

const fields: AppInputProps[] = [
  {
    title: "Email",
    type: "email",
    placeholder: "Email Address",
    name: "email",
    icon: <LuMail />,
  },
  {
    title: "Password",
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <LuLock />,
  },
];
