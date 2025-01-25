import { UserProfileBadge } from "@/components/user";

export default function EditDisplaayPhotoForm() {
  return (
    <div className="py-6 flex flex-col gap-3 items-center justify-center">
      <UserProfileBadge
        className="h-32 lg:h-56"
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        vertical
      />
      <button className="md:text-lg font-semibold btn-link">
        Change display photo
      </button>
    </div>
  );
}
