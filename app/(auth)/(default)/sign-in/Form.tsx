"use client";

import { signInAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";
import SocialAuth from "./SocialAuth";
import { __paths } from "@/utils";

const SigninForm = () => {
  const [state, action] = useActionState(signInAction, {});

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
          <Link
            href={__paths.forgotPassword}
            className="text-sm text-black hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <FormButton loading={false} className="btn-form">
          Login
        </FormButton>
      </form>
     
      <SocialAuth />
    </>
  );
};

export default SigninForm;

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
