import { ProfilePageHeader } from "@/components/layout";
import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import EditProfileForm from "./Form";
import EditDisplaayPhotoForm from "./PhotoForm";
import Link from "next/link";
import { __paths } from "@/utils";

export default function Page() {
  return (
    <>
      <ProfilePageHeader>Edit Profile</ProfilePageHeader>
      <MainLayoutResponsiveWrapper className="app-container">
        <div className="mx-auto max-w-[616px]">
          <EditDisplaayPhotoForm />
          <EditProfileForm />
          <div className="flex flex-col gap-2 mt-6 items-center">
            <Link
              href={__paths.userSettings}
              className="font-semibold btn-link"
            >
              Upgrade Profile Status
            </Link>
            <Link
              href={__paths.userSettings}
              className="font-semibold btn-link"
            >
              Account Settings
            </Link>
          </div>
        </div>
      </MainLayoutResponsiveWrapper>
    </>
  );
}
