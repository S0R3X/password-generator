import styles from "./SelectButton.module.scss";
import { SelecButtonProps } from "./SelectButtonProps";

export const SelectButton = ({
  children = "",
  checked,
  setChecked,
}: SelecButtonProps): JSX.Element => {
  return (
    <label className={styles.label}>
      <input
        onChange={setChecked}
        checked={checked}
        type="checkbox"
        className={styles["select-button"]}
      />
      <span className={styles["select-button-fake"]}></span>
      <span className={styles.text}>{children}</span>
    </label>
  );
};
