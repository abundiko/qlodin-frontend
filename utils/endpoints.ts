const API_HOST = "https://qlodin-backend.onrender.com/api";

export const __endpoints = {
  user: {
    auth: {
      signIn: `${API_HOST}/user/auth/login`,
    },
  },
} as const;
