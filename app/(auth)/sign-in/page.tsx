"use client";

import Link from "next/link";
// import SigninPage from "@/components/SIgninPage";
// import LoginForm from "@/components/LoginForm"
import LoginForm from "./Form";
import FadeInWrapper from "@/components/FadeInWrapper";

const page = () => {
  return (
    <div className="bg-[url('/bg.png')] bg-cover  min-h-screen  flex items-center justify-center relative overflow-hidden ">
      {/* <SigninPage /> */}
      <FadeInWrapper>
        <LoginForm />
        <div className="px-8 py-4 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Dont have an account?{" "}
            <Link href="/sign-up" className="text-black hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </FadeInWrapper>
    </div>
  );
};

export default page;
