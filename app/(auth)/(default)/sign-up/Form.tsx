"use client";

import { signUpAction } from "@/actions";
import {
  AppInput,
  AppInputProps,
  FormButton,
  FormMessage,
} from "@/components/formComponents";
import { LuLock, LuMail } from "react-icons/lu";
import { useActionState, useEffect, useState } from "react";
import ShowPasswordStrength from "@/components/formComponents/ShowPasswordStrength";
import {passwordStrength} from "check-password-strength";
import SocialAuth from "./SocialAuth";
type Strength = 0 | 1 | 2 | 3;

const SignupForm = () => {
  const [state, action] = useActionState(signUpAction, {});
  const [strength , setStrength] = useState<Strength>(0)
  const [password, setPassword] = useState("");

  useEffect(() =>{
    setStrength(passwordStrength(password).id as Strength)


  } )
   
  

  return (
    <>
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
        {fields2.map((field, index) => (
            <AppInput
              {...field}
              key={index}
              error={state?.fieldErrors?.[field.name]}
              onChange={(value) => setPassword(value)}
        
            />
          ))}
          
      {/* <p  className="text-sm  text-gray-400" >password Strength</p> */}
          <ShowPasswordStrength strength={strength} />
        <FormButton loading={false} className="btn-form">
          Next
        </FormButton>
        <SocialAuth/>
      </form>
    </>
  );
};

export default SignupForm;

const fields: AppInputProps[] = [
  {
    type: "email",
    placeholder: "Email Address",
    name: "email",
    icon: <LuMail />,
  },

]

const fields2: AppInputProps[] = [

  {
    type:"password",
    placeholder: "Password",
    name: "password",
    icon: <LuLock />,
  },
]








