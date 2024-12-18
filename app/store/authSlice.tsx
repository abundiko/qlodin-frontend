import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",  // Default to an empty string
  },
  reducers: {
    setEmail: (state, action) => {
      console.log("Setting email:", action.payload); // Debug log
      state.email = action.payload;
    },
  },
});

export const { setEmail } = authSlice.actions;
export default authSlice.reducer;
