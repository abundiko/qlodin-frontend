import { ProfilePageHeader } from "@/components/layout";
import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import EditDriptagForm from "./Form";
import Link from "next/link";
import { __paths } from "@/utils";

export default function Page() {
  return (
    <>
      <ProfilePageHeader>Password & Login</ProfilePageHeader>
      <MainLayoutResponsiveWrapper className="app-container">
        <div className="mx-auto max-w-[500px] mt-6">
          <EditDriptagForm />
          <div className="flex flex-col gap-2 mt-6 items-center">
            <Link
              href={__paths.userSettingsEmail}
              className="font-semibold btn-link"
            >
              Two factor authentication
            </Link>
          </div>
        </div>
      </MainLayoutResponsiveWrapper>
    </>
  );
}
