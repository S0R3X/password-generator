import { PasswordStregthValueType } from "../types/passwordStrength";

export interface PasswordStregthState {
  strengthValue: PasswordStregthValueType;
  strengthIndicators: [boolean, boolean, boolean, boolean];
}
