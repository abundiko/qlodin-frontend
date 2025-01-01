"use client";
import { Loader } from "lucide-react";
import { useGoogleAuth } from "@/hooks";

export default function SocialAuth() {
  const { loading: googleLoading, startAuth: authWithGoogle } = useGoogleAuth();

  return (
    <>
      <div className="flex flex-col items-center justify-center text-black text-sm md:text-lg md:font-semibold mt-3 leading-7">
        or
      </div>
      <div className="flex flex-col  gap-1 my-3">
        <SocialAuthButton
          title="Sign in with Google"
          icon="/images/icons/google.svg"
          onClick={authWithGoogle}
          loading={googleLoading}
        />
      </div>
    </>
  );
}

export function SocialAuthButton({
  icon,
  title,
  onClick,
  loading = false,
}: {
  icon?: string;
  title: string;
  onClick?: () => void;
  loading?: boolean;
}) {
  return (
    <button disabled={loading} onClick={onClick} className="btn-social-auth">
      <img
        className="w-5 aspect-square object-contain"
        src={icon}
        alt={`${title} logo`}
      />
      {title}
      {loading && <Loader className="w-4 h-4 animate-spin" />}
    </button>
  );
}
