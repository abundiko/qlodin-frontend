"use client";

import { signInAction } from "@/actions";
import {
  AppCaptcha,
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { useRecaptcha } from "@/hooks";
import { __paths } from "@/utils";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { LuLock, LuMail } from "react-icons/lu";
import SocialAuth from "./SocialAuth";

const SigninForm = () => {
  const [state, _action] = useActionState(signInAction, {});
  const { capchaToken, recaptchaRef, handleRecaptcha } = useRecaptcha();

  useEffect(() => {
    recaptchaRef.current?.reset();
  }, [state]);

  // extra step to handle captcha
  function action(formData: FormData) {
    if (capchaToken) formData.set("recaptcha", capchaToken);
    return _action(formData);
  }

  return (
    <>
      <form action={action}>
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
            className="text-sm text-black hover:underline w-fit"
          >
            Forgot password?
          </Link>
          <AppCaptcha
            recaptchaRef={recaptchaRef}
            handleRecaptcha={handleRecaptcha}
          />
        </div>
        <FormButton
          disabled={!capchaToken}
          loading={false}
          className="btn-form"
        >
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
    icon: <LuMail />,
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    icon: <LuLock />,
  },
];
