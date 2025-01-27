"use client";

import { updatePasswordAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { useAppActionState } from "@/hooks";

export default function EditDriptagForm() {
  const { action, state, submitting, formKey } =
    useAppActionState(updatePasswordAction);

  return (
    <form key={formKey} action={action} className="flex flex-col gap-3">
      <FormMessage res={state} />
      {formFields.map((field) => (
        <AppInput
          variant="app-input-white-bordered"
          key={field.name}
          {...field}
          error={state.fieldErrors?.[field.name]}
        />
      ))}
      <FormButton
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
    name: "currentPassword",
    type: "password",
    placeholder: "enter your current password",
    title: "Current Password",
  },
  {
    name: "newPassword",
    type: "password",
    placeholder: "enter your new password",
    title: "New Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "confirm new password",
    title: "",
  },
];
