import { MainLayoutBottomNav, MainLayoutSidebar } from "@/components/layout";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full w-full items-stretch min-h-screen flex max-md:flex-col">
      <Suspense>
        <MainLayoutSidebar />
      </Suspense>
      <section className={`bg-light-100 flex-shrink flex-grow relative`}>
        {children}
        <div className="h-40"></div>
      </section>
      <Suspense>
        <MainLayoutBottomNav />
      </Suspense>
    </section>
  );
}
