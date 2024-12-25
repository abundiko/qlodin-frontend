import { FadeInWrapper } from "@/components/animation";
import { AppLogo } from "@/components/micro";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/images/bg.png')] bg-cover  min-h-screen  flex items-center justify-center relative overflow-hidden md:p-6">
      <FadeInWrapper className="max-w-md w-full bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden p-8">
        <div className="flex flex-col items-center mt-10 justify-center">
          <AppLogo />
          <h1 className="text-[#1E1E1E] text-[30px] font-medium font-playfair">
            Qlodin.
          </h1>
        </div>
        {children}
      </FadeInWrapper>
    </div>
  );
}
