import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
     reducer: { userSlice }
});
export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
