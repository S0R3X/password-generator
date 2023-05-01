import { configureStore } from "@reduxjs/toolkit";
import passwordSettingsReducer from "./reducers/passwordSettingsSlice";
import passwordStrengthSlice from "./reducers/passwordStrengthSlice";

const store = configureStore({
  reducer: {
    passwordSettings: passwordSettingsReducer,
    passwordStrength: passwordStrengthSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
