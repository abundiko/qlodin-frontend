import Turnstile from "react-turnstile";

const client_site_key = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function AppCaptcha({
  onTokenChange,
}: {
  onTokenChange: (token: string | null) => void;
}) {
  return (
    <Turnstile
      sitekey={client_site_key}
      onVerify={onTokenChange}
      onExpire={() => onTokenChange(null)}
        fixedSize={true}
      theme="light"
    />
  );
}
