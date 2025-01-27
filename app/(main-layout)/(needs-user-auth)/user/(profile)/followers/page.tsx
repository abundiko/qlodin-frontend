import { AppInput } from "@/components/formComponents";
import { ProfilePageHeader } from "@/components/layout";
import { MainLayoutResponsiveWrapper } from "@/components/mainLayout";
import UserFollowCard from "@/components/user/UserFollowCard";
import { dummyUsers } from "@/types/user";
import { CiSearch } from "react-icons/ci";

export default function Page() {
  const users = dummyUsers;

  return (
    <>
      <ProfilePageHeader>Followers</ProfilePageHeader>
      <MainLayoutResponsiveWrapper className="app-container">
        <div className="flex flex-col gap-4 md:gap-6 pt-6 lg:px-6">
          <AppInput
            variant="app-input-white-bordered"
            name="search"
            placeholder="Search"
            icon={<CiSearch />}
          />
          <div className="flex flex-col">
            {users.map((user) => (
              <UserFollowCard key={user._id} user={user} />
            ))}
          </div>
        </div>
      </MainLayoutResponsiveWrapper>
    </>
  );
}
