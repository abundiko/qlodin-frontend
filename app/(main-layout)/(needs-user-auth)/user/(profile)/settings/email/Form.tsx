"use client";

import { updateUsernameAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  InputStatusCheckerIcon,
} from "@/components/formComponents";
import {
  useAppActionState,
  useEmailChecker,
  useUsernameChecker,
} from "@/hooks";
import { useUserStore } from "@/stores";
import { BiEnvelope } from "react-icons/bi";
import { CiAt } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { useEffectOnce } from "react-use";

export default function EditDriptagForm() {
  const { user, setUser } = useUserStore();
  const { status, email, setEmail, emailError } = useEmailChecker();
  useEffectOnce(() => {
    setEmail(user?.userName ?? "");
  });
  const { action, state, submitting } = useAppActionState(
    updateUsernameAction,
    {
      onSuccess(res) {
        if (res.data.user) setUser(res.data.user);
      },
    }
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      <FormMessage res={state} />
      {formFields.map((field) => (
        <AppInput
          variant="app-input-white-bordered"
          key={field.name}
          {...field}
          error={(() => {
            const stateError = [emailError].filter(
              (i) => typeof i === "string"
            );
            return stateError.length > 0
              ? stateError
              : state?.fieldErrors?.["userName"];
          })()}
          onChange={setEmail}
          value={email}
          rightComponent={<InputStatusCheckerIcon status={status} />}
        />
      ))}
      <FormButton
        disabled={status !== "success"}
        loading={submitting}
        className="btn-form !py-1.5 !w-fit !px-6 mx-auto"
      >
        Save Changes
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
