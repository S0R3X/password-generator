import { useState } from "react";
import styles from "./SettingsForm.module.scss";

export const SettingsForm = (): JSX.Element => {
  const [characterLength, setCharacterLenght] = useState<number>(0);
  return (
    <section className={styles["settings-form"]}>
      <div className={styles["character-length"]}>
        Character length
        <div className={styles["character-length__value"]}>
          {characterLength}
        </div>
      </div>
    </section>
  );
};
