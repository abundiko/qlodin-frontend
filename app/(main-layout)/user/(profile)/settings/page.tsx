import { ProfilePageHeader } from "@/components/layout";
import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import SettingsMain from "./Main";

export default function Page() {

  return (
    <>
      <ProfilePageHeader>Settings</ProfilePageHeader>
      <MainLayoutResponsiveWrapper className="app-container">
          <SettingsMain />
      </MainLayoutResponsiveWrapper>
    </>
  );
}
