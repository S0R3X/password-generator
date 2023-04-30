import { ChangeCharacterLength } from "../ChangeCharacterLength/ChangeCharacterLength";
import { CharacterLength } from "../CharacterLength/CharacterLength";
import styles from "./SettingsForm.module.scss";

export const SettingsForm = (): JSX.Element => {
  return (
    <section className={styles["settings-form"]}>
      <CharacterLength />
      <ChangeCharacterLength />
    </section>
  );
};
