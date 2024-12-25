import { cookies } from "next/headers";
import SignupVerifyEmailForm from "./Form";
import { redirect } from "next/navigation";
import { __cookies, __paths } from "@/utils";
import { z } from "zod";

const page = async () => {
  const { get } = await cookies();
  const email = get(__cookies.register_state)?.value;
  if (!email || !z.string().email().safeParse(email).success)
    redirect(__paths.signUp);

  return (
    <>
      <h1 className="text-xl text-center text-black text-[28px] font-semibold font-quicksand leading-7 tracking-tight md:text-2xl dark:text-white">
        Verify Your Email
      </h1>
      <p className="text-center text-black mb-6">
        Enter the 6-digit code sent to &quot;{email}&quot;
      </p>
      <SignupVerifyEmailForm email={email} />
    </>
  );
};

export default page;
