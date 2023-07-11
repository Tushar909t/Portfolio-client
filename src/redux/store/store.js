import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "../state-slice/darkSlice";
export default configureStore({
  reducer: {
    dark: darkReducer,
  },
});
