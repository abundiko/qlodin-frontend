import { __paths } from "@/utils";
import SignupForm from "./Form";

import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <h1 className="text-xl text-center text-black text-[28px] font-semibold font-quicksand leading-7 tracking-tight md:text-2xl dark:text-white">
        Sign Up
      </h1>
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
