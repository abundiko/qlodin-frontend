import Link from "next/link";
import LoginForm from "./Form";
import { __paths } from "@/utils";

const page = () => {
  return (
    <>
      <h1 className="text-xl text-center text-black text-[28px] font-semibold font-quicksand leading-7 tracking-tight md:text-2xl dark:text-white">
        welcome Back
      </h1>
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
