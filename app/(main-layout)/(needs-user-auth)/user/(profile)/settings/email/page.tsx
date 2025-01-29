import { ProfilePageHeader } from "@/components/layout";
import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import EditDriptagForm from "./Form";
import Link from "next/link";
import { __paths } from "@/utils";

export default function Page() {
  return (
    <>
      <ProfilePageHeader>Change Email</ProfilePageHeader>
      <MainLayoutResponsiveWrapper className="app-container">
        <div className="mx-auto max-w-[350px] mt-6">
          <EditDriptagForm />
          <div className="flex flex-col gap-2 mt-6 items-center">
            <Link
              href={__paths.userSettingsDriptag}
              className="font-semibold btn-link"
            >
              Change Driptag
            </Link>
          </div>
        </div>
      </MainLayoutResponsiveWrapper>
    </>
  );
}
