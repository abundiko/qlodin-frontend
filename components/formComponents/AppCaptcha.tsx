import ReCAPTCHA from "react-google-recaptcha";

const client_site_key = process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY ?? "";

export default function AppCaptcha({
  recaptchaRef,
  handleRecaptcha,
}: {
  recaptchaRef: React.RefObject<ReCAPTCHA | null>;
  handleRecaptcha: (token: string | null) => void;
}) {
  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={client_site_key}
      onChange={handleRecaptcha}
    />
  );
}
