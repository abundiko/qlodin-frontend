import { MainLayoutBottomNav, MainLayoutSidebar } from "@/components/layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-full w-full items-stretch min-h-screen flex max-md:flex-col">
      <MainLayoutSidebar />
      <section className={`bg-light-100 flex-shrink flex-grow overflow-y-auto`}>
        {children}
        <div className="h-40"></div>
      </section>
      <MainLayoutBottomNav />
    </section>
  );
}
