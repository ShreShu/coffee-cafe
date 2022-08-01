import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userMail: null,
  isLoggedIn: false,
  tokenId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.tokenId = action.payload.token;
      state.userMail = action.payload.email;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
