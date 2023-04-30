import { useAppSelector } from "../../hooks/redux";
import styles from "./CharacterLength.module.scss";

export const CharacterLength = (): JSX.Element => {
  const characterLength = useAppSelector(
    (state) => state.passwordSettings.characterLength
  );
  return (
    <div className={styles["character-length"]}>
      Character length
      <div className={styles["character-length__value"]}>{characterLength}</div>
    </div>
  );
};
