import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import {
  UserProfileTabs,
  UserProfileView
} from "@/components/user";
import { AppLayoutProps } from "@/types";
import { notFound } from "next/navigation";

export default async function Layout({
  children,
  params: _params,
}: AppLayoutProps<{ user: string }>) {
  let params;
  if (_params) params = await _params;
  if (!params?.user) notFound();
  const userName = decodeURIComponent(params?.user);
  console.log({ userName });
  if (!userName.startsWith("@")) notFound();

  // TODO: get user from db

  return (
    <div>
      <div className="bg-white max-md:rounded-b-xl shadow-md app-container pt-8">
        <UserProfileView />
      </div>
      <div className="app-container">
        <MainLayoutResponsiveWrapper className="flex flex-col gap-6">
          <div className="flex justify-center md:justify-between mt-4">
            <UserProfileTabs prefix={userName} />
          </div>
          {children}
        </MainLayoutResponsiveWrapper>
      </div>
    </div>
  );
}
