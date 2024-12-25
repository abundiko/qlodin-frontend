"use client";

import { signUpProfileSetupAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
  PhoneNumberWithCodeInput,
} from "@/components/formComponents";
import { Cake, User } from "lucide-react";
import { useActionState, useState } from "react";

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [state, _action] = useActionState(signUpProfileSetupAction, {});

  async function action(formData: FormData) {
    formData.append("mobileNumber", phoneNumber);

    return _action(formData);
  }

  return (
    <>
      <form className="p-3" action={action}>
        <div className="flex items-stretch mb-6 gap-4 flex-col">
          <FormMessage res={state} />
          <div className="flex max-md:flex-col gap-4">
            {fields1.map((field, index) => (
              <AppInput
                {...field}
                key={index}
                error={state?.fieldErrors?.[field.name]}
              />
            ))}
          </div>
          {fields2.map((field, index) => (
            <AppInput
              {...field}
              key={index}
              error={state?.fieldErrors?.[field.name]}
            />
          ))}
          <PhoneNumberWithCodeInput
            defaultValue={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </div>
        <FormButton loading={false} className="btn-form">
          Continue
        </FormButton>
      </form>
    </>
  );
};

export default Form;

const fields1: AppInputProps[] = [
  {
    placeholder: "First Name",
    name: "firstName",
    icon: <User />,
  },
  {
    placeholder: "Last Name",
    name: "lastName",
    icon: <User />,
  },
];

const fields2: AppInputProps[] = [
  {
    type: "date",
    placeholder: "DD/MM/YYYY",
    name: "dateOfBirth",
    icon: <Cake />,
  },
  {
    placeholder: "Driptag",
    name: "userName",
    icon: <User />,
  },
];
