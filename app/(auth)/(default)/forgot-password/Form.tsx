"use client";

import { forgotpasswordActions } from "@/actions/auth/forgotpassword";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";


import { useActionState } from "react";

import { __paths } from "@/utils";
import { LuMail } from "react-icons/lu";

const Form = () => {
    const [state, action] = useActionState(forgotpasswordActions, {});
  return (
    <main  className="w-full  max-w-md mx-auto p-6">
    <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-300">
      <div className="p-4 sm:p-7">
 
        <div className="mt-5">
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
     
        </div>
        <FormButton loading={false} className="btn-form">
          Send
        </FormButton>
      </form>
        </div>
      </div>
    </div>


  </main>
  )
}

export default Form

const fields: AppInputProps[] = [
    {
      type: "email",
      placeholder: "Email Address",
      name: "email",
      icon: <LuMail />,
    },]
