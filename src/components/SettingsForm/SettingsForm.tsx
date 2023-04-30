import { useEffect } from "react";
import { ChangeCharacterLength } from "../ChangeCharacterLength/ChangeCharacterLength";
import { ChangePasswordSettings } from "../ChangePasswordSettings/ChangePasswordSettings";
import { CharacterLength } from "../CharacterLength/CharacterLength";
import styles from "./SettingsForm.module.scss";
import { useAppSelector } from "../../hooks/redux";

export const SettingsForm = (): JSX.Element => {
  const upperCaseLetters = useAppSelector(
    (state) => state.passwordSettings.upperCaseLetters
  );
  const lowerCaseLetters = useAppSelector(
    (state) => state.passwordSettings.lowerCaseLetters
  );

  const numbers = useAppSelector((state) => state.passwordSettings.numbers);
  const symbols = useAppSelector((state) => state.passwordSettings.symbols);
  useEffect(() => {
    // Update the document title using the browser API
  }, [upperCaseLetters, lowerCaseLetters, numbers, symbols]);

  return (
    <section className={styles["settings-form"]}>
      <CharacterLength />
      <ChangeCharacterLength />
      <ChangePasswordSettings />
      <div></div>
    </section>
  );
};
