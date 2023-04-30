import { configureStore } from "@reduxjs/toolkit";
import passwordSettingsReducer from "./reducers/passwordSettingsSlice";

const store = configureStore({
  reducer: {
    passwordSettings: passwordSettingsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
