"use client";

import { updateUsernameAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  InputStatusCheckerIcon,
} from "@/components/formComponents";
import { useAppActionState, useUsernameChecker } from "@/hooks";
import { useUserStore } from "@/stores";
import { CiAt } from "react-icons/ci";
import { useEffectOnce } from "react-use";

export default function EditDriptagForm() {
  const { user, setUser } = useUserStore();
  const { status, username, setUsername, usernameError } = useUsernameChecker();
  useEffectOnce(() => {
    setUsername(user?.userName ?? "");
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
    name: "userName",
    placeholder: "enter your username",
    title: "Driptag",
    icon: <CiAt />,
  },
];
