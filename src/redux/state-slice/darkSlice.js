import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  DarkMode: false,
};
const darkSlice = createSlice({
  name: "dark",
  initialState,
  reducers: {
    Showdark: (state) => {
      state.DarkMode = true;
    },
    Hidedark: (state) => {
      state.DarkMode = false;
    },
  },
});
export const { Showdark, Hidedark } = darkSlice.actions;
export default darkSlice.reducer;
