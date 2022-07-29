import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userMail: null,
  isLoggedIn: true,
  tokenId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
