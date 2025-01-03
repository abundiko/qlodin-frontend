"use client";

import {
  signUpVerifyEmailAction,
  signUpVerifyEmailResendCodeAction,
} from "@/actions";
import {
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { useWaitTillAction } from "@/hooks";
import { useActionState, useEffect, useRef, useState } from "react";
import PinField from "react-pin-field";

const SignupForm = ({ email }: { email: string }) => {
  const [code, setCode] = useState("");
  const pinputRef = useRef<HTMLInputElement[]>(null);
  const { allow, allowed, formattedTime, disallow } = useWaitTillAction(
    15 * 1000
  ); //rensend verification code after 15 secs
  const formRef = useRef<HTMLFormElement>(null);
  const [state, _action, submitting] = useActionState(
    signUpVerifyEmailAction,
    {}
  );

  useEffect(() => {
    if (!pinputRef.current) return;
    pinputRef.current.forEach((input, index) => {
      input.value = code[index] || "";
    });
  }, [state]);

  async function action(formData: FormData) {
    formData.append("email", email);
    formData.append("otp", code);
    return _action(formData);
  }

  async function resendVerificationCode() {
    disallow();
    const resentCode = await signUpVerifyEmailResendCodeAction(email);
    if (!resentCode) allow();
  }

  return (
    <>
      <form ref={formRef} action={action} className="flex flex-col gap-4">
        <div className="flex items-stretch my-6 gap-4 flex-col">
          <FormMessage res={state} />
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
        <p className="text-sm text-gray-400 text-center">
          Didn&apos;t receive the code?{" "}
          {allowed ? (
            <button
              onClick={resendVerificationCode}
              type="button"
              className="text-black font-semibold hover:underline"
            >
              Resend Code
            </button>
          ) : (
            <span>wait {formattedTime}</span>
          )}
        </p>
        <FormButton
          disabled={code.length < 6}
          loading={submitting}
          className="btn-form"
        >
          Verify Email
        </FormButton>
      </form>
    </>
  );
};

export default SignupForm;
