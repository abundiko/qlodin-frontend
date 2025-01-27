import { getUserProfileAction } from "@/actions";
import { __paths } from "@/utils";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user] = await getUserProfileAction();
  if (!user) {
    redirect(__paths.signIn);
  }
  
  return <>{children}</>;
}
