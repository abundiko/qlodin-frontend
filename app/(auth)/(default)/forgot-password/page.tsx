import Link from "next/link";
import Form from "./Form";
import { __paths } from "@/utils";

export default function Page() {
  return (
    <>
      <h2 className="text-xl text-center text-black font-semibold leading-7 tracking-tight md:text-2xl mb-4">
        Forgot password?
      </h2>
      <Form />
      <div className="px-8 py-4 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Remember your password?{" "}
          <Link href={__paths.signIn} className="text-black hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
