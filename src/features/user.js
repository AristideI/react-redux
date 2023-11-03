// we have to import createSlice which allows us to create a reducer in an easy way
import { createSlice } from "@reduxjs/toolkit";

// here we have to create userSlive which will store info about our user state and it is a reducer

const userDetails = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: userDetails },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = userDetails;
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
