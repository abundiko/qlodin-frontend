"use client";

import { signUpProfileSetupAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  InputStatusCheckerIcon,
  PhoneNumberWithCodeInput,
  UsernameSuggestions,
  AppSelect,
} from "@/components/formComponents";
import { Checkbox } from "@/components/ui/checkbox";
import { LuCake, LuUser } from "react-icons/lu";
import { useActionState, useState } from "react";
import Link from "next/link";
import { __paths } from "@/utils";
import { useUsernameChecker } from "@/hooks";
import { UsernameSuggestionParams } from "@/lib/gemini";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fieldValues, setFieldValues] = useState<UsernameSuggestionParams>({});
  const { status, username, setUsername, usernameError } = useUsernameChecker();
  const [state, _action, submitting] = useActionState(
    signUpProfileSetupAction,
    {}
  );

  // function to update a single field
  function updateField(name: keyof UsernameSuggestionParams, value: string) {
    setFieldValues((old) => ({ ...old, [name]: value }));
  }

  async function action(formData: FormData) {
    formData.append("mobileNumber", phoneNumber);
    return _action(formData);
  }

  return (
    <>
      <form action={action} className="flex flex-col gap-4">
        <div className="flex items-stretch mb-6 gap-3 flex-col">
          <FormMessage res={state} />
          <div className="grid md:grid-cols-2 gap-3">
            {fields1.map((field, index) => (
              <AppInput
                {...field}
                key={index}
                error={state?.fieldErrors?.[field.name]}
                onChange={(v) => updateField(field.name as any, v)}
              />
            ))}
            <AppSelect
              title="Gender"
              name="gender"
              options={["Male", "Female", "Rather not say"]}
              placeholder="Gender"
              onChange={updateField.bind(null, "gender")}
              error={state?.fieldErrors?.["gender"]}
            />
          </div>
          <div className="flex flex-col gap-1">
            <AppInput
              {...{
                placeholder: "Driptag",
                name: "userName",
                icon: <LuUser />,
                title: "Driptag",
              }}
              error={(() => {
                const stateError = [usernameError].filter(
                  (i) => typeof i === "string"
                );
                return stateError.length > 0
                  ? stateError
                  : state?.fieldErrors?.["userName"];
              })()}
              onChange={setUsername}
              value={username}
              rightComponent={<InputStatusCheckerIcon status={status} />}
            />
            <UsernameSuggestions onSelect={setUsername} {...fieldValues} />
          </div>
          {/* ))} */}
          <PhoneNumberWithCodeInput
            defaultValue={phoneNumber}
            onChangeText={setPhoneNumber}
            error={state?.fieldErrors?.["mobileNumber"]?.[0]}
          />
        </div>
        <FormButton
          disabled={status !== "success"}
          loading={submitting}
          className="btn-form"
        >
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
    title: "First Name",
    placeholder: "First Name",
    name: "firstName",
    icon: <LuUser />,
  },
  {
    title: "Last Name",
    placeholder: "Last Name",
    name: "lastName",
    icon: <LuUser />,
  },
  {
    title: "Date of birth",
    type: "date",
    placeholder: "DD/MM/YYYY",
    name: "dateOfBirth",
    icon: <LuCake />,
  },
];
