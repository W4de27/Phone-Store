import { configureStore } from "@reduxjs/toolkit";
import PhoneStore from "./Tp Phone Store/phoneStore-Slice";

export const store = configureStore({
  reducer: {
    PhoneStore : PhoneStore,
  },
});
