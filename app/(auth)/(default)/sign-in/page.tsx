import Link from "next/link";
import LoginForm from "./Form";
import { __paths } from "@/utils";
import { AppPageProps } from "@/types";
import { Suspense } from "react";
import { NextPathListener } from "@/components/micro";

const page = async ({}: AppPageProps) => {
  return (
    <>
      <Suspense>
        <NextPathListener />
      </Suspense>
      <h2 className="text-xl text-center text-black font-semibold leading-7 tracking-tight md:text-2xl mb-4">
        Welcome Back
      </h2>
      <LoginForm />
      
      <div className="px-8 py-4 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Dont have an account?{" "}
          <Link href={__paths.signUp} className="text-black hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

export default page;
