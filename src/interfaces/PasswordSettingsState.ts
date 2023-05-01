import { PasswordIncludes } from "./PasswordIncludes";

export interface PasswordSettingsState {
  characterLength: number;
  includes: PasswordIncludes;
}

