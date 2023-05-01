import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PasswordSettingsState {
  characterLength: number;
  upperCaseLetters: boolean;
  lowerCaseLetters: boolean;
  numbers: boolean;
  symbols: boolean;
}

const initialState: PasswordSettingsState = {
  characterLength: 10,
  upperCaseLetters: false,
  lowerCaseLetters: false,
  numbers: false,
  symbols: false,
};

const passwordSettingsSlice = createSlice({
  name: "passwordSettings",
  initialState,
  reducers: {
    changeCharacterLength(state, action: PayloadAction<number>) {
      state.characterLength = action.payload;
    },
    includeUpperCaseLetters(state, action: PayloadAction<boolean>) {
      state.upperCaseLetters = action.payload;
    },
    includeLowerCaseLetters(state, action: PayloadAction<boolean>) {
      state.lowerCaseLetters = action.payload;
    },
    includeNumbers(state, action: PayloadAction<boolean>) {
      state.numbers = action.payload;
    },
    includeSymbols(state, action: PayloadAction<boolean>) {
      state.symbols = action.payload;
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
