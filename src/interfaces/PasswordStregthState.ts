import { PasswordStregthValueType } from "../types/passwordStrength";

export interface PasswordStregthState {
  stregthValue: PasswordStregthValueType;
  strengthIndicators: [boolean, boolean, boolean, boolean];
}
