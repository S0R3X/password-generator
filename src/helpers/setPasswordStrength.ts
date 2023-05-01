import { PasswordIncludes } from "../interfaces/PasswordIncludes";
import { PasswordStregthValueType } from "../types/passwordStrength";

export const setPasswordStrength = (
  characterLength: number,
  passwordIncludes: PasswordIncludes
): PasswordStregthValueType => {
  let countIncludes = 0;
  for (const value of Object.values(passwordIncludes)) {
    if (value) countIncludes++;
  }
  if (!characterLength || !countIncludes) {
    return undefined;
  } else if (characterLength <= 4) {
    return "very low";
  } else if (characterLength > 4 && characterLength <= 9) {
    if (characterLength <= 6 && countIncludes === 1) {
      return "very low";
    } else if (characterLength > 7 && countIncludes >= 3) return "medium";
    return "low";
  } else if (characterLength > 9 && characterLength <= 14) {
    if (characterLength <= 11 && countIncludes === 1) {
      return "low";
    } else if (characterLength > 11 && countIncludes === 4) return "high";
    return "medium";
  } else {
    if (countIncludes <= 2) return "medium";
    return "high";
  }
};
