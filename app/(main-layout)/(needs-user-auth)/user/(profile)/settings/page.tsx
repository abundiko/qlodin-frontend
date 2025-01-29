import { ProfilePageHeader } from "@/components/layout";
import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import SettingsMain from "./Main";
import { notFound } from "next/navigation";

export default function Page() {
  // notFound();
  return (
    <>
      <ProfilePageHeader>Settings</ProfilePageHeader>
      <MainLayoutResponsiveWrapper className="app-container">
        <SettingsMain />
      </MainLayoutResponsiveWrapper>
    </>
  );
}
