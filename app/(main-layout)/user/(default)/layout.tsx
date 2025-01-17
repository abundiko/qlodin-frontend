import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import { TabButton } from "@/components/ui";
import { MyProfileView, UserProfileTabs } from "@/components/user";
import { __paths } from "@/utils";
import { AiFillPlusCircle } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-white max-md:rounded-b-xl shadow-md app-container pt-8">
        <MyProfileView />
      </div>
      <div className="app-container">
        <MainLayoutResponsiveWrapper className="flex flex-col gap-6">
          <div className="flex justify-center md:justify-between mt-4">
            <UserProfileTabs />
            <div className="w-fit max-md:hidden">
            <TabButton
              href={__paths.newLook}
              icon={<BsPlusCircleFill />}
              label="New Look"
              active
              className="flex-row-reverse"
            />
            </div>
          </div>
          {children}
        </MainLayoutResponsiveWrapper>
      </div>
    </div>
  );
}
