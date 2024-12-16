import { configureStore } from "@reduxjs/toolkit";
import personDetails  from "../features/personDetailsSlice";

export const store = configureStore({
  reducer: {
    app: personDetails
  },
});