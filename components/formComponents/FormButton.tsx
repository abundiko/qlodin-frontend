"use client";
import { Loader } from "lucide-react";
import { HTMLAttributes } from "react";
import { useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa6";

export type FormButtonProps = HTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function FormButton({
  className,
  children,
  loading = false,
  ...props
}: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button {...props} disabled={loading || pending} className={className}>
      {
        // loading||pending ? <FaSpinner className="animate-spin" /> : <>{children}</>
        loading || pending ? (
          <Loader className="w-6 h-6 animate-spin  mx-auto" />
        ) : (
          <>{children}</>
        )
      }
    </button>
  );
}
