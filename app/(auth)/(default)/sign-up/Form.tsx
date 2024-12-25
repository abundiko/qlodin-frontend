"use client";

import { signUpAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { Lock, Mail } from "lucide-react";
import { useActionState } from "react";

const SignupForm = () => {
  const [state, action] = useActionState(signUpAction, {});

  return (
    <>
      <form className="p-3" action={action}>
        <div className="flex items-stretch mb-6 gap-4 flex-col">
          <FormMessage res={state} />
          {fields.map((field, index) => (
            <AppInput
              {...field}
              key={index}
              error={state?.fieldErrors?.[field.name]}
            />
          ))}
        </div>
        <FormButton loading={false} className="btn-form">
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
    icon: <Mail />,
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <Lock />,
  },
];
