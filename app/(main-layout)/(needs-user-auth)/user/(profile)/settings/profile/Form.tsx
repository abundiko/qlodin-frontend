"use client";

import { updateProfileAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { useAppActionState } from "@/hooks";
import { useUserStore } from "@/stores";
import { useState } from "react";

export default function EditProfileForm() {
  const { user, setUser } = useUserStore();
  const [formFields] = useState<AppInputProps[]>(() => [
    {
      name: "firstName",
      placeholder: "First Name",
      title: "First Name",
      value: user?.firstName ?? "",
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      title: "Last Name",
      value: user?.lastName ?? "",
    },
    {
      name: "link",
      placeholder: "enter valid link here",
      title: "Link/URL",
      value: user?.link ?? "",
    },
    {
      name: "bio",
      placeholder: "about myself",
      title: "Bio message",
      value: user?.bio ?? "",
      textarea: true,
    },
  ]);
  const { action, state, submitting } = useAppActionState(updateProfileAction, {
    onSuccess(res) {
      if (res.data.user) setUser(res.data.user);
    },
  });

  return (
    <form action={action} className="flex flex-col gap-3">
      <FormMessage res={state} />
      <div className="grid grid-cols-2 gap-3">
        {formFields.slice(0, 2).map((field) => (
          <AppInput
            key={field.name}
            variant="app-input-white-bordered"
            {...field}
            error={state?.fieldErrors?.[field.name]}
          />
        ))}
      </div>
      {formFields.slice(2).map((field) => (
        <AppInput
          key={field.name}
          variant="app-input-white-bordered"
          {...field}
          error={state?.fieldErrors?.[field.name]}
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
