import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PasswordStregthValueType } from "../../types/passwordStrength";
import { PasswordStregthState } from "../../interfaces/PasswordStregthState";

const initialState: PasswordStregthState = {
  strengthValue: "medium",
  strengthIndicators: [true, true, true, false],
};

const passwordStregthSlice = createSlice({
  name: "passwordStregth",
  initialState,
  reducers: {
    changeStrengValue(state, action: PayloadAction<PasswordStregthValueType>) {
      state.strengthValue = action.payload;
      switch (action.payload) {
        case "very low":
          state.strengthIndicators = [true, false, false, false];
          break;

        case "low":
          state.strengthIndicators = [true, true, false, false];
          break;

        case "medium":
          state.strengthIndicators = [true, true, true, false];
          break;

        case "high":
          state.strengthIndicators = [true, true, true, true];
          break;

        case undefined:
          state.strengthIndicators = [false, false, false, false];
          break;

        default:
          break;
      }
    },
  },
});

export const { changeStrengValue } = passwordStregthSlice.actions;

export default passwordStregthSlice.reducer;
