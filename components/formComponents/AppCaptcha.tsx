import Turnstile from "react-turnstile";

export default function AppCaptcha({
  onTokenChange,
}: {
  onTokenChange: (token: string | null) => void;
}) {
  const client_site_key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  return (
    <Turnstile
      sitekey={client_site_key}
      size="flexible"
      onVerify={onTokenChange}
      onTimeout={() => onTokenChange(null)}
      onLoad={() => onTokenChange(null)}
      onExpire={() => onTokenChange(null)}
      fixedSize={true}
      theme="light"
    />
  );
}
