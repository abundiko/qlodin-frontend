import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import { MyProfileView } from "@/components/user";

export default function UserPage() {
  return (
    <div>
      <div className="bg-white max-md:rounded-b-xl shadow-md app-container max-md:pt-8">
        <MyProfileView />
      </div>
      <div className="app-container">
        <MainLayoutResponsiveWrapper>
        </MainLayoutResponsiveWrapper>
      </div>
    </div>
  );
}
