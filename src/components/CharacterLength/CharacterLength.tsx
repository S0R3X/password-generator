import { useAppSelector } from "../../hooks/redux";
import styles from "./CharacterLength.module.scss";

export const CharacterLength = (): JSX.Element => {
  const characterLength = useAppSelector(
    (state) => state.passwordSettings.characterLength
  );
  return (
    <div className={styles.container}>
      Character length
      <div className={styles.value}>{characterLength}</div>
    </div>
  );
};
