"use client";

import { signUpProfileSetupAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  InputStatusCheckerIcon,
  PhoneNumberWithCodeInput,
} from "@/components/formComponents";
import { Checkbox } from "@/components/ui/checkbox";
import { LuCake, LuUser } from "react-icons/lu";
import { useActionState, useState } from "react";
import Link from "next/link";
import { __paths } from "@/utils";
import { useUsernameChecker } from "@/hooks";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { status, username, setUsername, usernameError } = useUsernameChecker();
  const [state, _action] = useActionState(signUpProfileSetupAction, {});

  async function action(formData: FormData) {
    formData.append("mobileNumber", phoneNumber);
    return _action(formData);
  }

  return (
    <>
      <form action={action} className="flex flex-col gap-4">
        <div className="flex items-stretch mb-6 gap-3 flex-col">
          <FormMessage res={state} />
          <div className="flex max-md:flex-col gap-3">
            {fields1.map((field, index) => (
              <AppInput
                {...field}
                key={index}
                error={state?.fieldErrors?.[field.name]}
              />
            ))}
          </div>
          {/* {fields2.map((field, index) => ( */}
          <AppInput
            {...fields2[0]}
            error={state?.fieldErrors?.[fields2[0].name]}
          />
          <AppInput
            {...fields2[1]}
            error={(() => {
              const stateError = [usernameError].filter(
                (i) => typeof i === "string"
              );
              return stateError.length > 0
                ? stateError
                : state?.fieldErrors?.[fields2[1].name];
            })()}
            onChange={setUsername}
            value={username}
            rightComponent={<InputStatusCheckerIcon status={status} />}
          />
          {/* ))} */}
          <PhoneNumberWithCodeInput
            defaultValue={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </div>
        <FormButton disabled={status !== "success"} className="btn-form">
          Continue
        </FormButton>
        <div className="flex gap-2 items-center justify-center">
          <Checkbox required id="agree" />
          <label htmlFor="agree" className="text-sm">
            I have read and agree to the terms of service
          </label>
        </div>
        <p className="text-center text-xs">
          By clicking Continue, you agree to Qlodin's{" "}
          <Link
            href={__paths.termsOfService}
            className="font-semibold hover:underline"
          >
            Terms of Service
          </Link>
          <br />
          and confirm that you have read Qlodin's{" "}
          <Link
            href={__paths.privacyPolicy}
            className="font-semibold hover:underline"
          >
            Privacy Policy
          </Link>
        </p>
      </form>
    </>
  );
};

export default Form;

const fields1: AppInputProps[] = [
  {
    placeholder: "First Name",
    name: "firstName",
    icon: <LuUser />,
  },
  {
    placeholder: "Last Name",
    name: "lastName",
    icon: <LuUser />,
  },
];

const fields2: AppInputProps[] = [
  {
    type: "date",
    placeholder: "DD/MM/YYYY",
    name: "dateOfBirth",
    icon: <LuCake />,
  },
  {
    placeholder: "Driptag",
    name: "userName",
    icon: <LuUser />,
  },
];
