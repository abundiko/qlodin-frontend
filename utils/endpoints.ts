
const API_HOST = "https://qlodin-backend.onrender.com/api";

export const __endpoints = {
  google: {
    captcha: {
      verify: `https://www.google.com/recaptcha/api/siteverify`,
    },
  },
  cloudflare:{
    verifyTurnstileCaptcha: "https://challenges.cloudflare.com/turnstile/v0/siteverify"
  },
  user: {
    auth: {
      signIn: `${API_HOST}/user/auth/login`,
      signUp: `${API_HOST}/user/auth/register`,
      signUpVerifyEmail: `${API_HOST}/user/auth/verify-email`,
      signUpVerifyEmailResendCode: `${API_HOST}/user/auth/resend-otp`,
      signUpProfileSetup: `${API_HOST}/user/auth/profile-setup`,
      usernameAvailabity: `${API_HOST}/user/auth/validate-username`,
      emailAvailabity: `${API_HOST}/user/auth/validate-email`,
      forgotPassword: `${API_HOST}/user/auth/forgot-password`,
      forgotPasswordVerifyCode: `${API_HOST}/user/auth/verify-resetcode`,
      forgotPasswordReset: `${API_HOST}/user/auth/reset-password`,
      forgotPasswordResend: `${API_HOST}/user/auth/resend-reset-code`,
      googleLogin: `${API_HOST}/user/auth/google-login`,
      googleRegister: `${API_HOST}/user/auth/google-register`,
    },
  },
} as const;
