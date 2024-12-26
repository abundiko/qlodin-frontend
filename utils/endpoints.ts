const API_HOST = "https://qlodin-backend.onrender.com/api";

export const __endpoints = {
  user: {
    auth: {
      signIn: `${API_HOST}/user/auth/login`,
      signUp: `${API_HOST}/user/auth/register`,
      signUpVerifyEmail: `${API_HOST}/user/auth/verify-email`,
      signUpVerifyEmailResendCode: `${API_HOST}/user/auth/resend-otp`,
      signUpProfileSetup: `${API_HOST}/user/auth/profile-setup`,
      forgotpassword:`${API_HOST}/user/auth/forgot-password`,
    },
  },
} as const;
