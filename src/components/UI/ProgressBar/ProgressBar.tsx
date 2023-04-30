import { ProgressBarProps } from "./ProgressBarProps";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({
  value,
  max = 100,
  min = 0,
  ...props
}: ProgressBarProps): JSX.Element => {
  return (
    <div className={styles["container-progress-bar"]}>
      <input
        type="range"
        className={styles["progress-bar"]}
        max={max}
        min={min}
        value={value}
        {...props}
      />
      <div
        className={styles["progress-bar-line"]}
        style={{ width: `${(value * 100) / max}%` }}
      ></div>
    </div>
  );
};
