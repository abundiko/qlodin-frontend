"use client";

import {
  AppInput,
  AppInputProps,
  FormButton,
} from "@/components/formComponents";
import { useState } from "react";

export default function EditProfileForm() {
  const [formFields] = useState<AppInputProps[]>(() => [
    {
      name: "firstName",
      placeholder: "First Name",
      title: "First Name",
      value: "",
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      title: "Last Name",
      value: "",
    },
    {
      name: "link",
      placeholder: "enter valid link here",
      title: "Link/URL",
      value: "",
    },
    {
      name: "bio",
      placeholder: "about myself",
      title: "Bio message",
      value: "",
      textarea: true,
    },
  ]);

  return (
    <form className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        {formFields.slice(0, 2).map((field) => (
          <AppInput
            key={field.name}
            {...field}
            variant="app-input-white-bordered"
          />
        ))}
      </div>
      {formFields.slice(2).map((field) => (
        <AppInput
          key={field.name}
          {...field}
          variant="app-input-white-bordered"
        />
      ))}
      <FormButton className="btn-form !py-1.5 !w-fit !px-6 mx-auto">
        Save Changes
      </FormButton>
    </form>
  );
}
