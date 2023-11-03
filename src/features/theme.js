import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "" },
  reducers: {
    themer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { themer } = themeSlice.actions;
