import { fullName } from "@/functions/helpers";
import { UserType } from "@/types/user";
import { UserAvatar } from "./user-avatar";
import Link from "next/link";
import { __paths } from "@/utils";

export type UserFollowCardProps = {
  user: UserType;
};

export default function UserFollowCard({ user }: UserFollowCardProps) {
  return (
    <div className="px-1 lg:px-3 py-2 flex items-center justify-between hover:bg-gray-200/80 rounded">
      <Link
        href={__paths.singleUser(user.userName)}
        className="flex items-center gap-2 w-full"
      >
        <UserAvatar
          className="rounded-full size-14 object-cover avatar"
          fallbackLabel={user.userName}
          src={user.profilePicture}
          alt={user.userName}
          height={46}
          width={46}
        />
        <div className="flex flex-col">
          <h4 className="leading-snug text-base text-gray-900 font-medium">
            {fullName(user.firstName, user.lastName)}
          </h4>
          <p className="leading-snug text-sm text-gray-600">{user.userName}</p>
        </div>
      </Link>
      <button className="btn-black !py-1 !px-4 !font-normal !w-fit !h-8 !text-sm !rounded">
        Follow
      </button>
      <button className="btn-dark-50 truncate !py-1 !px-4 !font-normal !w-fit !h-8 !text-sm !rounded">
        Following
      </button>
    </div>
  );
}
