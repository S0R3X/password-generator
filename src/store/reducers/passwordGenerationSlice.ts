import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PasswordGenerationState } from "../../interfaces/PasswordGenerationState";
import { PasswordSettingsState } from "../../interfaces/PasswordSettingsState";

const initialState: PasswordGenerationState = {
  password: undefined,
  isCurrectGeneration: true,
};

const passwordGenerationSlice = createSlice({
  name: "passwordGeneration",
  initialState,
  reducers: {
    setPassword(state, action: PayloadAction<string | undefined>) {
      state.password = action.payload;
    },
    checkCurrectGeneration(
      state,
      action: PayloadAction<PasswordSettingsState>
    ) {
      const { characterLength, includes } = action.payload;
      let countIncludes = 0;
      for (const value of Object.values(includes)) {
        if (value) countIncludes++;
      }
      if (characterLength && countIncludes) {
        state.isCurrectGeneration = true;
      } else state.isCurrectGeneration = false;
    },
  },
});

export const { setPassword, checkCurrectGeneration } =
  passwordGenerationSlice.actions;

export default passwordGenerationSlice.reducer;
