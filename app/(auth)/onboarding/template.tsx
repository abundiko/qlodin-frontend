import { FadeInWrapper } from "@/components/animation";
import { AppLogo } from "@/components/micro";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[url('/images/bg.png')] md:[background-color:#fffa] bg-blend-lighten bg-cover bg-fixed min-h-screen flex items-center md:justify-center relative overflow-hidden md:p-6">
      <FadeInWrapper className="md:max-w-lg max-md:min-h-screen w-full backdrop-filter bg-white/80 md:bg-white md:backdrop-blur-[10px] md:rounded-2xl shadow-xl overflow-hidden p-8">
        <div className="flex flex-col items-center mt-10 justify-center mb-5 md:mb-4">
          <AppLogo />
        </div>
        {children}
      </FadeInWrapper>
    </div>
  );
}
