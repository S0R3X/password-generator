import styles from "./CharacterLength.module.scss";

export const CharacterLength = (): JSX.Element => {
  return (
    <div className={styles["character-length"]}>
      Character length
      <div className={styles["character-length__value"]}>0</div>
    </div>
  );
};
