import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PasswordSettingsState } from "../../interfaces/PasswordSettingsState";

const initialState: PasswordSettingsState = {
  characterLength: 10,
  includes: {
    upperCaseLetters: false,
    lowerCaseLetters: true,
    numbers: true,
    symbols: false,
  },
};

const passwordSettingsSlice = createSlice({
  name: "passwordSettings",
  initialState,
  reducers: {
    changeCharacterLength(state, action: PayloadAction<number>) {
      state.characterLength = action.payload;
    },
    includeUpperCaseLetters(state, action: PayloadAction<boolean>) {
      state.includes.upperCaseLetters = action.payload;
    },
    includeLowerCaseLetters(state, action: PayloadAction<boolean>) {
      state.includes.lowerCaseLetters = action.payload;
    },
    includeNumbers(state, action: PayloadAction<boolean>) {
      state.includes.numbers = action.payload;
    },
    includeSymbols(state, action: PayloadAction<boolean>) {
      state.includes.symbols = action.payload;
    },
  },
});

export const {
  changeCharacterLength,
  includeLowerCaseLetters,
  includeNumbers,
  includeSymbols,
  includeUpperCaseLetters,
} = passwordSettingsSlice.actions;

export default passwordSettingsSlice.reducer;
