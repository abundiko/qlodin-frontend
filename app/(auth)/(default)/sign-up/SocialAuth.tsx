import { SocialAuthButton } from "../sign-in/SocialAuth";

export default function SocialAuth() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-black text-sm md:text-lg md:font-semibold mt-3 leading-7">
        or
      </div>
      <div className="flex flex-col  gap-1 my-3">
        <SocialAuthButton
          title="Sign in with Google"
          icon="/images/icons/google.svg"
          onClick={() => {}}
        />
      </div>
    </>
  );
}
