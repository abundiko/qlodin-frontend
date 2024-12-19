import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  token: string | null;
  userId: string | null;
}

const initialState: AuthState = {
  email: "",
  token: null,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      console.log("Setting email:", action.payload); // Debug log
      state.email = action.payload;
    },
    setAuthData: (
      state,
      action: PayloadAction<{ token: string; userId: string }>
    ) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      console.log("Setting token and user:", action.payload); // Debug log
    },
    clearAuth: (state) => {
      state.email = "";
      state.token = null;
      state.userId = null;
    },
  },
});

export const { setEmail, setAuthData, clearAuth } = authSlice.actions;
export default authSlice.reducer;
