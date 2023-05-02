import { ChangeCharacterLength } from "../ChangeCharacterLength/ChangeCharacterLength";
import { ChangePasswordSettings } from "../ChangePasswordSettings/ChangePasswordSettings";
import { CharacterLength } from "../CharacterLength/CharacterLength";
import styles from "./SettingsForm.module.scss";
import { PasswordStrength } from "../PasswordStrength/PasswordStrength";
import { ButtonGenerate } from "../ButtonGenerate/ButtonGenerate";

export const SettingsForm = (): JSX.Element => {
  return (
    <section className={styles["settings-form"]}>
      <CharacterLength />
      <ChangeCharacterLength />
      <ChangePasswordSettings />
      <PasswordStrength />
      <ButtonGenerate />
    </section>
  );
};
