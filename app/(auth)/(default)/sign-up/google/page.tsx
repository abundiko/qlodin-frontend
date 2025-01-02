import { cookies } from "next/headers";
import Form from "./Form";
import { __cookies, __paths } from "@/utils";
import { redirect } from "next/navigation";
import { verify } from "jsonwebtoken";
import { debugLog } from "@/functions/debug";

const page = async () => {
  // get the data stored in cookies
  const { get } = await cookies();
  const registerData = get(__cookies.google_register_data)?.value;
  if (!registerData) redirect(__paths.signUp);
  let validData: any;
  try {
    validData = await verify(registerData, process.env.JWT_SECRET ?? "");
    if (!validData || !validData.email || !validData.googleId)
      throw new Error();
  } catch (error) {
    debugLog({ error, "@": "sign-up/google/page.tsx:17" });
    redirect(__paths.signUp);
  }

  return (
    <>
      <h2 className="text-xl text-center text-black font-semibold leading-7 tracking-tight md:text-2xl mb-4">
        Complete your Profile
      </h2>
      <Form data={validData} />
    </>
  );
};

export default page;
