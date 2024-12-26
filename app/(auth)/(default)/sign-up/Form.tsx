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
import { useActionState } from "react";
import { useEmailChecker } from "@/hooks";

const SignupForm = () => {
  const [state, action] = useActionState(signUpAction, {});
  const { status, email, setEmail, emailError } = useEmailChecker();

  return (
    <>
      <form action={action}>
        <div className="flex items-stretch mb-6 gap-4 flex-col">
          <FormMessage res={state} />
          <AppInput
            {...fields[0]}
            error={[emailError ?? ""] ?? state?.fieldErrors?.[fields[0].name]}
            onChange={setEmail}
            value={email}
            rightComponent={<InputStatusCheckerIcon status={status} />}
          />
          <AppInput
            {...fields[1]}
            error={state?.fieldErrors?.[fields[1].name]}
          />
        </div>
        <FormButton
          disabled={status !== "success"}
          className="btn-form"
        >
          Next
        </FormButton>
      </form>
    </>
  );
};

export default SignupForm;

const fields: AppInputProps[] = [
  {
    type: "email",
    placeholder: "Email Address",
    name: "email",
    icon: <LuMail />,
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <LuLock />,
  },
];
