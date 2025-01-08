import { __paths } from "@/utils";
import SignupForm from "./Form";

import React from "react";
import Link from "next/link";
import { FormButton } from "@/components/formComponents";

const page = () => {
  return (
    <>
      <h2 className="text-xl text-center text-black font-semibold leading-7 tracking-tight md:text-2xl mb-4">
        Sign Up
      </h2>
      <SignupForm />


      <div className="px-8 py-4 bg-opacity-50 flex justify-center">
        
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link href={__paths.signIn} className="text-black hover:underline">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default page;
