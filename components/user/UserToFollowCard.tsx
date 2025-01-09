type UserToFollowCardProps = {
  name: string;
  username: string;
  image: string;
};

export default function UserToFollowCard(user: UserToFollowCardProps) {
  return (
    <div className="px-3 py-2 flex items-center justify-between hover:bg-gray-200/80">
      <div className="flex items-center gap-2 w-full">
        <img
          className="rounded-full size-14"
          src={user.image}
          alt={user.name}
        />
        <div className="flex flex-col">
          <h4 className="leading-snug text-base text-gray-900 font-medium">
            {user.name}
          </h4>
          <p className="leading-snug text-sm text-gray-600">{user.username}</p>
        </div>
      </div>
      <button className="btn-black !py-1 !px-4 !font-normal !w-fit !h-8">
        Follow
      </button>
    </div>
  );
}
