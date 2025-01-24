import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarImageProps } from "@radix-ui/react-avatar";

export function UserAvatar({
  fallbackLabel,
  ...props
}: AvatarImageProps & { fallbackLabel?: string }) {
  return (
    <Avatar
      style={{
        height: props.height ?? 24,
        width: props.width ?? 24,
      }}
    >
      <AvatarImage {...props} />
      {fallbackLabel && (
        <AvatarFallback>{fallbackLabel.charAt(0) ?? "?"}</AvatarFallback>
      )}
    </Avatar>
  );
}
